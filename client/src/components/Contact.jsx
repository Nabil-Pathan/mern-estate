import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = ({listing}) => {
    const [landloard , setLandLoard] = useState(null)
    const [message , setMessage]  = useState("")

    useEffect(()=>{
         const fetchLandloard = async ()=>{
            try {
                const { data } = await axios.get(`/api/user/${listing.userRef}`)
                setLandLoard(data)
            } catch (error) {
                console.log(error.message);
            }
         }

         fetchLandloard()
    },[listing.userRef])


    const onChange = (e) =>{
        setMessage(e.target.value)
    }
  return (
   <>
    { landloard && (
         <div className='flex flex-col gap-2'>
            <p>Contact <span className="font-semibold">{landloard.username}</span> for <span className="font-semibold">{listing.name.toLowerCase()}</span></p>
            <textarea name="message" id="message" value={message} onChange={onChange} rows="2" placeholder='Enter your message' className="w-full border p-3 rounded-lg "></textarea>

            <Link to={`mailto:${landloard.email}?subject=Regarding ${listing.name}&body=${message}`} className="bg-slate-700 text-white text-center p-3 rounded-lg uppercase hover:opacity-95 ">Send Message</Link>
         </div>
    )}
   </>
  )
}

export default Contact