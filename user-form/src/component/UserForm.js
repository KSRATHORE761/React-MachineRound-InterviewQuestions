import React,{useState} from "react";
import axios from 'axios';

function UserForm() {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    //define state for error handling
    const[nameError, setNameError] = useState('');
    const[emailError, setEmailError] = useState('')
    const[passwordError, setPasswordError] = useState('')
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(name.length===0 || name===null){
        setNameError('Please enter the name')
    }
    if(email.length===0 || email===null){
        setEmailError('Please enter the email id')
    }
    if(password.length<8){
        setPasswordError('Password Must be of atleast 8 characters ')
    }
    const{data} = await axios.post('https://localhost:7115/api/UserRegistration/add',{
        name:name,
        email:email,
        password:password
    }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
)
  };
  const handleCancel = () =>{
    setName('');
    setEmail('');
    setPassword('');
    setNameError('');
    setEmailError('');
    setPasswordError('');
  }
  return (
    <div className="container">
    <div>
    <h1>User Registration Form</h1>
    </div>
    <div className="form">
    <form>
        <label  className="label">Name : </label>
        <input type="text" placeholder="Enter your name" value={name} onChange= {(e)=>setName(e.target.value)}/>
        {nameError && <span className="errormsg">{nameError}</span>}
        <label  className="label"> Email :  </label>
        <input type="email" placeholder="Enter your email" value={email} onChange= {(e)=>setEmail(e.target.value)}/>
        {emailError && <span className="errormsg">{emailError}</span>}
        <label className="label"> Password :  </label>
        <input type="password" placeholder="Enter your password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
        {passwordError && <span className="errormsg">{passwordError}</span>}
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <button type="button" className="btn__cancel" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
    </div>
  );
}

export default UserForm;
