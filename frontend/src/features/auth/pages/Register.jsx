import React, { useState } from 'react'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'
import "../styles/Form.scss"

const Register = () => {
    const { loading, handleRegister } = useAuth()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await handleRegister(username, email, password)

        navigate('/dashboard')
    }


    return (
        <main>
            <div className="form-container">
                <h1>Create account</h1>
                <p className="form-subtitle">Join MoodBeats and let AI soundtrack your expressions.</p>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="register-username">Username</label>
                        <input
                            id="register-username"
                            required
                            onInput={(e) => { setUsername(e.target.value) }}
                            type="text"
                            name='username'
                            placeholder='Enter username' />
                    </div>
                    <div className="field">
                        <label htmlFor="register-email">Email</label>
                        <input
                            id="register-email"
                            required
                            onInput={(e) => { setEmail(e.target.value) }}
                            type="email" name='email'
                            placeholder='Enter email' />
                    </div>
                    <div className="field">
                        <label htmlFor="register-password">Password</label>
                        <input
                            id="register-password"
                            required
                            onInput={(e) => { setPassword(e.target.value) }}
                            type="password"
                            name='password'
                            placeholder='Enter password' />
                    </div>
                    <button>Register</button>
                </form>

                <p> Already have an account? <Link className='toggleAuthForm' to='/login'>Login</Link> </p>

            </div>
        </main>
    )
}

export default Register