import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSumbit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/auth/register', values)
            if(response.status === 201) {
                navigate('/login')
            }
        } catch(err) {
            console.log(err.message)
        }
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#121212]">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-700 shadow-xl bg-[#1f1f1f]">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-600 px-6 py-6 pt-8 text-center">
          <h3 className="text-xl font-semibold text-white">Create an Account</h3>
          <p className="text-sm text-gray-400">
            Use your details to create an account
          </p>
        </div>
        <form onSubmit={handleSumbit} className="px-6 py-6 space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm text-gray-300 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full px-3 py-2 bg-[#2b2b2b] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              name="username"
              onChange={handleChanges}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-3 py-2 bg-[#2b2b2b] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              name="email"
              onChange={handleChanges}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 bg-[#2b2b2b] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              name="password"
              onChange={handleChanges}
            />
          </div>
          <button className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white py-2 rounded-md">Sign Up</button>
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-green-400 hover:underline">
              Login
            </Link>{' '}
            instead.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register