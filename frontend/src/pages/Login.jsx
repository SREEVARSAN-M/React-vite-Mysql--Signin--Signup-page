import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [values, setValues] = useState({
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
            const response = await axios.post('http://localhost:3000/auth/login', values)
            if(response.status === 201) {
                localStorage.setItem('token', response.data.token)
                navigate('/')
            }
        } catch(err) {
            console.log(err.message)
        }
    }
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#121212]">
        <div className="bg-[#1f1f1f] shadow-xl px-10 py-12 rounded-lg w-full max-w-md border border-gray-700">
          <h2 className="text-xl text-white font-semibold mb-6 text-center">Login to Your Account</h2>
          <form onSubmit={handleSumbit} className="space-y-4">
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
            <button className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white py-2 rounded-md">Login</button>
          </form>
          <div className="text-center text-sm text-gray-400 mt-4">
            <span>Don't have an account? </span>
            <Link to="/register" className="text-green-400 hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
    )
}

export default Login