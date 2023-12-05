import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { app } from '../firebase'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { toast  } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"

const OAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleClick = async () =>{
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth , provider)
            
            const { data } = await axios.post('/api/auth/google', result.user )

            console.log(data);
            dispatch(signInSuccess(data))
            toast.success('Login Success !')
            navigate('/')
        } catch (error) {
            console.log(error.message);
            toast.error('Something went wrong please try again')
        }
    }
  return (
    <button type="button" className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95" onClick={handleGoogleClick}>Continue with google</button>
  )
}

export default OAuth