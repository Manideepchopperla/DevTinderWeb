import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setUser } from '../utils/userSlice';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const [emailId, setEmailId] = useState('manideepchopperla@gmail.com');
  const [password, setPass] = useState('Manideep@123');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async()=>{
    try{
    const res = await axios.post(BASE_URL+"/login",{
      emailId,
      password
    },
    {
      withCredentials:true
    });
    dispatch(setUser(res.data.data))
    navigate('/')
    }catch(error){
      console.error(error);
    }

    
    
  }


  return (
    <div className='flex items-center justify-center my-10'>
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
            <label className="fieldset-legend">Email ID</label>
            <label className="input validator">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
              <input type="input" 
              required placeholder="Email ID" value={emailId} pattern="[A-Za-z][A-Za-z0-9\-]*" minLength="3" maxLength="30" title="Only letters, numbers or dash" 
              onChange={(e) => setEmailId(e.target.value)}
              />
            </label>

            <label className="fieldset-legend">Password</label>
            <label className="input validator ">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
              <input type="password" required placeholder="Password" value={password} minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                onChange={(e)=>setPass(e.target.value)}
              />
            </label> 
          <div className="card-actions justify-end">
            <button className="btn btn-primary my-5 mx-4" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login