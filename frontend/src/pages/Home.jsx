import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token')
      console.log("Token in Home:", token)
      const response = await axios.get('http://localhost:3000/auth/home', {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      })
      if(response.status !== 200 && response.status !== 201) {
        navigate('/login')
      }
    } catch(err){
      console.error("Fetch error:", err)
      navigate('/login')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    } else {
      fetchUser()
    }
  }, [])

  return (
    <div className='text-3xl text-blue-500'>Home</div>
  )
}

export default Home