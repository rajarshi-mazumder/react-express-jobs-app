import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';


const Error = () => {
  const error= useRouteError();
  
  if(error.status === 404){
    return <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohhh! PAge not found</h3>
        <p>We can't find the page </p>
        <Link to='/dashboard'>back home</Link>
      </div>
    </Wrapper>
  }
  return (
    <div>
      <h1>Error Page</h1>
      <Link to='/' >Back home</Link>
    </div>
  )
}

export default Error