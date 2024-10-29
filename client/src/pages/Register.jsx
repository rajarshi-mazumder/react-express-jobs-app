import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import Logo from '../components/Logo';
import FormRow from '../components/FormRow';
import {Form, redirect, useNavigation, Link} from 'react-router-dom'; 
import {customFetch} from '../utils/customFetch';

export const action = async ({request})=>{
  const formData=  await request.formData();
  const data= Object.fromEntries(formData);
  console.log(data);

  try{
    await customFetch.post('/auth/register', data);
    return redirect("/login");;
  }
  catch(error){
    console.log(error);
    return error;
  }

}

const Register = () => {
  return (
    <Wrapper>
      <Form method='post'  className='form' action='/register'>
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
      </Form>  
    </Wrapper>
  )
}

export default Register