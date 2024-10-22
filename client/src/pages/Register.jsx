import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import Logo from '../components/Logo';
import FormRow from '../components/FormRow';
import {Form, redirect, useNavigation, Link} from 'react-router-dom'; 

export const action = async ({request})=>{
  const formData=  await request.formData();
  const data= Object.fromEntries(formData);
  console.log(data);
  return null;
}

const Register = () => {
  return (
    <Wrapper>
      <form method='post'  className='form' action='/login'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='john'/>
        <FormRow type='text' name='lastName' defaultValue='doe' labelText='last name'/>
        <FormRow type='text' name='location' defaultValue='earth'/>
        <FormRow type='email' name='email' defaultValue='john@gmail.com'/>
        <FormRow type='password' name='password' defaultValue='secret123'/>
        <button type='submit' className='btn btn-clock' >submit</button>
        <p>Already a  member?
        <Link to='/login' className='member-btn'>Login</Link>
        </p>
      </form>  
    </Wrapper>
  )
}

export default Register