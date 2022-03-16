import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


import { toast } from 'react-toastify'
import PasswordStrengthBar from 'react-password-strength-bar'

import { createUserAccount, loginUser } from '../api/client'
import { useAuth } from "../authentication/AuthProvider"

/**
 * Sign-up page component
 * @returns JSX
 */
const SignUp = () => {
    // TODO: Replace by type once TypeScript is installed

    const auth = useAuth()

    const makeBlankUserDetails = () => ({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    
    const navigation = useNavigate()

    const [userDetails, setUserDetails] = useState(makeBlankUserDetails())
    const [errors, setErrors] = useState({})

    const onInputChange = (event) => setUserDetails({
        ...userDetails,
        [event.target.name]: event.target.value
    })

    const loginNewUser = async () => {
        try {
            await auth.login({
                username: userDetails.email,
                password: userDetails.password
            })

            navigation('/onboarding')
        } catch (err) {
            toast.error('Your account has been created. However, an error ocurred while logging-in. Please login with your credentials.')
            navigation('/login')
        }
    }

    const submitSignUp = async (event) => {
        event.preventDefault()

        try {
            const signUp = await createUserAccount(userDetails)
        } catch (err) {
            if (err.response && err.response.status === 400) {
                toast.error('One or more details are invalid. Please try again.')
                setErrors(err.response.data)
            }

            return
        }

        toast.success('Account created successfully!')
        await loginNewUser()
    }

    return (
        <div className="centered-form-container">
            <div className="wrapper">
                <h2>Sign Up</h2>
                {/* <p className="error">Error(s):</p>
                <ul className="error">
                    <li>Invalid username</li>
                    <li>Email already in use</li>
                    <li>Passwords do not match</li>
                </ul> */}
                <form onSubmit={submitSignUp}>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            required
                            autoFocus
                            name="firstName"
                            value={userDetails.firstName}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            required
                            name="lastName"
                            value={userDetails.lastName}
                            onChange={onInputChange}
                        />
                        <p className="error">Invalid last name</p>
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            name="email"
                            value={userDetails.email}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                            name="password"
                            value={userDetails.password}
                            onChange={onInputChange}
                        />
                    </div>
                    <PasswordStrengthBar password={userDetails.password} />  
                    <div className="input-box" style={{ marginTop: '6px' }}>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            required
                            name="confirmPassword"
                            value={userDetails.confirmPassword}
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="input-box button">
                        <input type="Submit" defaultValue="Sign Up" />
                    </div>
                    <div className="text">
                        <h3>Have an account? <Link to="/login">Login now</Link></h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp