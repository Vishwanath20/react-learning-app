import CrudFeatureLayoutMenu from "./CrudFeatureLayoutMenu";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegistration = ()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
   

    const onSubmit=async()=>{
        const newUser = { email, password, role };
        console.log('newUser:',newUser);
        await axios.post('http://localhost:3001/users', newUser);
    }

    return(
        <>
        <CrudFeatureLayoutMenu></CrudFeatureLayoutMenu>
        <div className="container">
          <h1>User Registration</h1>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                 onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <textarea
                className="form-control"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="select-role">select-role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary" onClick={onSubmit} >Register</button>
            </form>
        </div>
        </>
    );
}

export default UserRegistration;