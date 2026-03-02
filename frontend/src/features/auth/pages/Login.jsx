import React, { useState } from 'react'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'
import "../styles/Form.scss"
const Login = () => {
    const { user, loading, handleLogin } = useAuth()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await handleLogin(username, email, password)

        navigate('/')

    }

    
    return (
        <>
            <main>
                <div className="form-container">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit} >
                        <input
                            required
                            onInput={(e) => { setUsername(e.target.value), setEmail(e.target.value) }}
                            type="text"
                            name='username' 
                            placeholder='Enter Username or Email' />
                        <input
                            required
                            onInput={(e) => { setPassword(e.target.value) }}
                            type="password"
                            name='password'
                            placeholder='Enter password' />
                        <button type='submit'>Login</button>
                    </form>
                    <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
                </div>
            </main>
        </>
    )
}

export default Login