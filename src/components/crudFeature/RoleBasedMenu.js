// Dashboard.js
import React, { useEffect, useState } from 'react';

const RoleBasedMenu = ( ) => {

    const [role, setRole]=useState(null);
    useEffect(()=>{
        setRole(localStorage.getItem("userRole"));
    },[]);
  return (
    <div className="container">
      <h1>Dashboard</h1>
      {/* <ul>
        <li>Menu option 1</li>
        <li>Menu option 2</li>
        <li>Menu option 3</li>
        {role === 'admin' && (
          <>
            <li>Admin menu option 1</li>
            <li>Admin menu option 2</li>
          </>
        )}
      </ul> */}
    </div>
  );
};

export default RoleBasedMenu;
