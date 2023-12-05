import React from 'react'
import { Link , useNavigate } from 'react-router-dom';
import axios from "axios"
import { toast  } from 'react-hot-toast';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart , signInSuccess , signInFailure} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

const Signin = () => {

  const [formData, setFormData] = useState({});
  const { loading , error } = useSelector((state)=> state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleChange = (e) => {
    setFormData({...formData , [e.target.id] : e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/signin',formData)
      dispatch(signInSuccess(data))
      toast.success('Signin Success')
      navigate('/');
    } catch (error) {
       toast.error(error.message)
       dispatch(signInFailure(error.message))
       console.log(error.message);
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

        <button
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          Signin
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/signup'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
    </div>
  )
}

export default Signin