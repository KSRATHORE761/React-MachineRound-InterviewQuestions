import React, { useState } from "react";
import "./FolderStyle.css";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  //const expand = false;
  const handleNewFileFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };


  const addNewFolder = (e) =>{
    if(e.keyCode === 13 && e.target.value){
      const treeData = insertNode(explorer,explorer.id,e.target.value,showInput.isFolder);
      setShowInput({...showInput,visible:false});
    }
  }
  const insertNode = (tree,folderId,item,isFolder) =>{
    const treeData = tree;
    if(treeData.id === folderId && treeData.isFolder){
      treeData.items.unshift({
        id:new Date().getTime(),
        name:item,
        isFolder:isFolder,
        items:[]
      });
      return treeData;
    }
  }
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFileFolder(e, true)}>
              Folder +
            </button>
            <button onClick={(e) => handleNewFileFolder(e, false)}>
              File +
            </button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", marginLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input 
                type="text" 
                required 
                autoFocus 
                className="inputContainer__input" 
                onBlur = {()=>setShowInput({...showInput,visible:false})}
                onKeyDown = {addNewFolder}
                >
                </input>
            </div>
          )}
          {explorer.items.map((exp) => {
            return <Folder key={exp.id} explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        <span>📄{explorer.name}</span>
      </div>
    );
  }
}

export default Folder;
