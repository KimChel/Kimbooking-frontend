import axios from 'axios'
import { set } from 'date-fns'
import React, { useContext, useState } from 'react'
import { UNSAFE_NavigationContext, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import "./register.css"

const Register = () => {

    const [error, setError] = useState([false])


    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    })

    const {username, password, email} = credentials


    const navigate = useNavigate()


    const handleChange = name => event => {

        setCredentials({
            ...credentials,
            error: false,
            [name]: event.target.value
        })

    }


    const register = async () => {

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, credentials)
            navigate("/")

        } catch (err) {
            setCredentials({
                ...credentials,
                error: err.response.data.msg,
            })
        }
    }

    const handeClick = (e) => {
        e.preventDefault()
        register({ username, email, password})
        setCredentials({
            ...credentials,
            username: '',
            email: '',
            password:''
        })

    }


    return (
        <div className="register">

            <div className="registerContainer">
                <input type="text" placeholder="username" id="username" value={username} onChange={handleChange('username')} className="registerInput" />
                <input type="text" placeholder="email" id="email" value={email} onChange={handleChange('email')} className="registerInput" />
                <input type="password" placeholder="password" id="password" value={password} onChange={handleChange('password')} className="registerInput" />
                <button onClick={register} className="registerButton">Register</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Register