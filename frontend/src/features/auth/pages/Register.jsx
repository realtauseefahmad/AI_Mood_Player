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

        navigate('/login')

    }


    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        required
                        onInput={(e) => { setUsername(e.target.value) }}
                        type="text"
                        name='username'
                        placeholder='Enter Username' />
                    <input
                        required
                        onInput={(e) => { setEmail(e.target.value) }}
                        type="email" name='email'
                        placeholder='Enter email' />
                    <input
                        required
                        onInput={(e) => { setPassword(e.target.value) }}
                        type="password"
                        name='password'
                        placeholder='Enter password' />
                    <button>Register</button>
                </form>

                <p> Already have an account? <Link className='toggleAuthForm' to='/login'>Login</Link> </p>

            </div>
        </main>
    )
}

export default Register