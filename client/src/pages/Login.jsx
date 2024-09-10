import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import Logo from '../components/Logo';
import FormRow from '../components/FormRow';

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>login</h4>
        <FormRow type='email' name='email' defaultValue='john@gmail.com'/>
        <FormRow type='password' name='password' defaultValue='secret123'/>
        <button type='submit' className='btn btn-clock' >submit</button>
        <button type='btn' className='btn btn-clock' >explore the app</button>
        <p>Not a  member?
        <Link to='/register' className='member-btn'>Register</Link>
        </p>
      </form>
  </Wrapper>
  )
}

export default Login