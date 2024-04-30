import React,{useState,useEffect} from "react";
import "../style.css";
import { tenureData } from "../utils/constants";


function EmiCalculator() {

  const[cost,setCost] = useState(0);
  const[interestRate,setInterestRate] = useState(0)
  const[processingFee,setProcessingFee] = useState(1);
  const[downPayment,setDownPayment] = useState(0);
  const[emi,setEmi] = useState(0);
  const[tenure,setTenure] = useState(12);
  //const[totalDownPayment,setTotalDownPayment] = useState(0);

  // const calculateTotalDownPayment= (e) =>{
  //   if(!cost) return;
  //   const dp = Number(e.target.value);
  //   setDownPayment(dp.toFixed(0));
    
    
  //   const principal = Number(cost);
  //   const feeInPercentage = Number(processingFee)/100;
  //   const tDownPayment= dp + (principal * (feeInPercentage))
  //   setTotalDownPayment(tDownPayment);
  //   // const emiPerTenure = calculateEMI(tDownPayment);
  //   // setEmi(emiPerTenure);
  // }

  const totalDownPayment = () =>{
    return  (Number(downPayment) + (cost - downPayment) * (processingFee / 100)).toFixed(0);
  }

  const totalLoanAmount =()=>{
    return (emi * tenure).toFixed(0);
  }

  const updateEMI = (e) =>{

    if(!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    // calculate EMI and Update it
    const emi = calculateEMI(dp);
    setEmi(emi);

  }

  const updateDownPayment = (e) =>{
    if(!cost) return;
    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    // calculate DownPayment and update it.

    const dp = calculateDP(emi);
    setDownPayment(dp.toFixed(0));

  }

  const calculateDP =(emi) =>{
    if(!cost) return;
    const downPaymentPercent = 100 - (emi/calculateEMI(0)) * 100;
    return Number((downPaymentPercent/100)*cost).toFixed(0);

  }

  const calculateEMI = (dp) =>{
    if(!cost) return;
    //EMI amount = [P x R x (1+R)^N]/[(1+R)^N-1]
    const loanAmt = cost-dp;
    const rateOfInterest = interestRate/100;
    const numberofYears = tenure/12;
    const EMI = (loanAmt*rateOfInterest*(1+rateOfInterest)**numberofYears) / ((1+rateOfInterest)**numberofYears-1);
    return Number(EMI/12).toFixed(0);
  }

  useEffect(()=>{
    if(!(cost>0)) {
      setDownPayment(0);
      setEmi(0);
    }

  const emi = calculateEMI(downPayment);
    setEmi(emi);
  },[tenure,cost])

  return (
    <div className="app">
      <h1>EMI Calculator</h1>
      <span className="title">Total Cost of Asset</span>
      <input 
        type="number"   
        value={cost}
        onChange = {(e)=>setCost(e.target.value)} 
        />
        <span className="title">Interset Rate(in %)</span>
        <input 
        type="number"   
        value={interestRate}
        onChange = {(e)=>setInterestRate(e.target.value)} 
        />
        <span className="title">Processing Fee(in %)</span>
        <input 
        type="number"   
        value={processingFee}
        disabled
        />
        <br></br>
        <span className="title">Down Payment</span>
        <span className="loan__downpayment">Total Down Payment -{totalDownPayment()}</span>
        <input 
          type="range" 
          min={0}
          max={cost}
          value={downPayment} 
          onChange = {updateEMI}
          />
        <div className="lables">
          <label>0%</label>
          <label>Rs - {downPayment}</label>
          <label> 100%</label>
        </div>
        <span className="title">Loan Per Month</span>
        <span className="loan__downpayment">Total Loan Amount - {totalLoanAmount()} </span>
        <input 
        type="range"  
        min={calculateEMI(cost)}
        value={emi}
        onChange = {updateDownPayment} 
        />
          <div className="lables">
            <label>Rs - {calculateEMI(cost)}</label>
            <label>Rs - {emi}</label>
            <label>Rs - {calculateEMI(0)}</label>
          </div>

        <span className="title">Tenure</span>        
        <div className="tenure">
        {tenureData.map((t)=>{
          return(
            <button
              onClick = {()=>setTenure(t)}
              key={t}
              className={t===tenure ? "selected":""}
            >{t}
            </button>
          )
        })}
        </div>
    </div>
  );
}

export default EmiCalculator;
