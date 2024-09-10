import React from 'react'
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';


const Landing = () => {
  return (
    <Wrapper>
    <nav><Logo /></nav> 
    <div className="container page">
      <div className="info">
        <h1>
          job<span>tracking</span> app
        </h1>
        <p>Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</p>
        <Link to='/register' className='btn register-link'> Register</Link>
        <Link to='/login' className='btn'>Login/ Demo User</Link>
        </div>  
    </div> 
    <img  src={main} alt='job' className='img main-img' />
    </Wrapper>
  )
}

export default Landing