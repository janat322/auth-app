import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const navigate = useNavigate()





const Register = () => {
    const[id, setId] = useState()
    const[name, setName] = useState()
    const[password, setpassword] = useState()
    const[email, setemail] = useState()
    const[phone, setphone] = useState()
    const[coutry, setcoutry] = useState()
    const[address, setaddress] = useState()

    const handlesubmit = (e) => {
        e.preventDefault();
        let obj = { id, name, password, email, phone, coutry, address }
        console.log(obj);


        axios.post('http://localhost:8000/users' {
            body: JSON.stringify(obj)
        }).then((res) => alert('все успешно')), navigate('/src/pages/Login')
          
        
    }




    return (
        <div className='container'>
            <h1>User registeration</h1>
            <div className='info'>
                <div className='info-left'>
                <label>User name
                    <input type="text" placeholder='user' value={id} onChange={(e) => setId(e.target.value)}/>
                </label>
                <label>fullname
                    <input type="text" placeholder='full' value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>phone
                    <input type="tel" placeholder='phone' value={phone} onChange={(e) => setphone(e.target.value)}/>
                </label>
                <label>address
                    <input type="text" placeholder='address' value={address} onChange={(e) => setaddress(e.target.value)}/>
                </label>
                <label>coutry
                    <input type="text" placeholder='coutry' value={coutry} onChange={(e) => setcoutry(e.target.value)}/>
                </label>
                </div>
                <div className='info-right'>
                <label>password
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                </label>
                <label>email
                    <input type="text" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)}/>
                </label>
                </div>
            </div>
            <button onClick={handlesubmit}>registeration</button>
        </div>
    );
};

export default Register;