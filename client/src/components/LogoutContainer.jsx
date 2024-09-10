import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/LogoutContainer'
import {FaUserCircle, FaCaretDown, FaCar} from 'react-icons/fa';
import { useDashboardContext} from '../pages/DashboardLayout';

const LogoutContainer = () => {

const [showLogout, setShowLogout]= useState(false);
const {user, logoutUser} = useDashboardContext();

  return (
    <Wrapper>
      <button type='button' className='btn logout-btn' 
      onClick={()=>setShowLogout(!showLogout)}>
        <FaUserCircle/>
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout?"dropwdown show-dropdown"  : "show-dropdown"}>
      <button onClick={logoutUser} className='dropdown-btn'> Logout</button>
      </div>
      </Wrapper> 
  );
}

export default LogoutContainer