import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';

function App() {
  const[products,setProducts] = useState([]);
  const [page, setPage] = useState(1);
  
  const fetchProduct = async() =>{
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();
    if(data &&  data.products){
      setProducts(data.products);
      console.log(products);
    }
  }

  useEffect(()=>{
    fetchProduct();
  },[])

  const selectPageHandler = (selectedPage) =>{
    if(selectedPage>=1 && selectedPage <=products.length/10 && selectedPage!=page){
      setPage(selectedPage);
    }
  }
  return (
    <div className="app">
      {products.length>0 && (
        <div className='products'>
          {products.slice(page,page+10).map((product=>{
            return(
              <div className='product'>
              <img
                key={product.key}
                src={product.thumbnail}
                alt={product.thumbnail}
                />
                <span>{product.title}</span>
                </div>
            )
          }))}
        </div>
      )}
      {products.length > 0 && <div className="pagination">
      <span className={page>1 ? "" : "pagination__disable"} onClick={()=>selectPageHandler(page-1)}>◀</span> 
      {[...Array(products.length/10)].map((_,i)=>{
        return(
          <span key={i} className={page == i+1 ? "pagination__selected":""} onClick={()=>selectPageHandler(i+1)}>{i+1}</span>
        )
      })}
      <span className={page<products.length/10 ? "" : "pagination__disable"} onClick={()=>selectPageHandler(page+1)}>▶</span> 
      </div>}
    </div>
  )
}

export default App
