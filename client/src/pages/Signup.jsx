import React, { useEffect , useState } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import axios from "axios"
import { toast  } from 'react-hot-toast';
import OAuth from '../components/OAuth';

const Signup = () => {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()


  const handleChange = (e) => {
    setFormData({...formData , [e.target.id] : e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    try {
      setLoading(true)
      const { data } = await axios.post('/api/auth/signup',formData)
      setLoading(false)
      toast.success('Signup Success')
      navigate('/signin');
    } catch (error) {
       setLoading(false)
       toast.error(error.message)
       console.log(error.message);
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input
        type='text'
        placeholder='username'
        className='border p-3 rounded-lg'
        id='username'
        onChange={handleChange}
      />
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
        // disabled={loading}
        className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
      >
        {/* {loading ? 'Loading...' : 'Sign Up'} */} Signup
      </button>
      <OAuth/>
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have an account?</p>
      <Link to={'/signin'}>
        <span className='text-blue-700'>Sign in</span>
      </Link>
    </div>
    
  </div>
  )
}

export default Signup