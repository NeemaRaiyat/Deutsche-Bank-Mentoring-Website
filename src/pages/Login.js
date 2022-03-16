import { useState } from "react"

import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useAuth } from "../authentication/AuthProvider"

import '../css/signup-login.css'

/**
 * Login page component
 * @returns JSX
 */
const Login = () => {

    const auth = useAuth()
    const navigation = useNavigate();

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })

    const onInputChange = (event) => setUserDetails({
        ...userDetails,
        [event.target.name]: event.target.value
    })

    const onSubmit = async (event) => {
        event.preventDefault()

        try {
            await auth.login({
                username: userDetails.email,
                password: userDetails.password
            }, user => toast.success(`Welcome back ${user.firstName}`))
        } catch (e) {
            console.log(e)
            toast.error('Invalid username or password. Please try again.')
            return
        }

        navigation('/')
    }
    
    return (
        <div className="centered-form-container">
            <div className="wrapper">
                <h2>Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="input-box">
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            required
                            autoFocus
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="input-box button">
                        <input type="Submit" value="Login" readOnly />
                    </div>
                    <div className="text">
                        <h3>Don't have an account? <Link to="/signup">Sign Up</Link></h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login