import React, { useState } from 'react'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'
import "../styles/Form.scss"
const Login = () => {
    const { handleLogin } = useAuth()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await handleLogin(username, email, password)

        navigate('/dashboard')
    }

    
    return (
        <main>
            <div className="form-container">
                <h1>Welcome back</h1>
                <p className="form-subtitle">Log in to let MoodBeats match songs to your expressions.</p>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="login-username">Username or Email</label>
                        <input
                            id="login-username"
                            required
                            onInput={(e) => {
                                setUsername(e.target.value)
                                setEmail(e.target.value)
                            }}
                            type="text"
                            name="username"
                            placeholder="Enter username or email"
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="login-password">Password</label>
                        <input
                            id="login-password"
                            required
                            onInput={(e) => { setPassword(e.target.value) }}
                            type="password"
                            name="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
                <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
            </div>
        </main>
    )
}

export default Login