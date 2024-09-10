import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard';
import {SmallSidebar, BigSidebar, Navbar} from '../components';
import { checkDefaultTheme } from '../App';


const DashboardContent = createContext() ;

const DashboardLayout = () => {

  const user= {name: 'john'};

  const [showSidebar, setShowSidebar]= useState(false);
  const [isDarkTheme, setIsDarkTheme]= useState(checkDefaultTheme());

  const toggleDarkTheme= ()=>{
    const newDarkTheme= !isDarkTheme;
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  }

  const toggleSidebar= ()=>{
    setShowSidebar(!showSidebar);
  }

  const logoutUser=()=>{
    console.log("logout user");
  }

  return (
    <DashboardContent.Provider value={
      {user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser}}>
    <Wrapper>
      <main className="dashboard">
    <SmallSidebar />
    <BigSidebar />
    <div>
      <Navbar />
      <div className="dashboard-page">
        <Outlet />
      </div>
    </div>
      </main>
    </Wrapper>
    </DashboardContent.Provider>
  )
}

export const useDashboardContext= ()=>useContext(DashboardContent);
export default DashboardLayout