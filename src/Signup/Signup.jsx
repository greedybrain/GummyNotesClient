import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import MenuFooter from '../Home/MenuDrawer/MenuFooter/MenuFooter'
import LogoTitle from '../Login/LogoTitle/LogoTitle'
import './Signup.css'
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffSharpIcon from '@material-ui/icons/VisibilityOffSharp';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import axios from 'axios'
import UserContext from '../Context/userContext'

const Signup = ({ history }) => {
        const userContext = useContext(UserContext)
        const { dispatchSignup } = userContext.actions

        const [passwordVisible, setPasswordVisible] = useState(false)
        const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')

        const handleChange = event => {
                switch(event.target.name) {
                        case "signup_name": 
                                setName(event.target.value)
                                break;
                        case "signup_email":
                                setEmail(event.target.value)
                                break;
                        case "signup_password":
                                setPassword(event.target.value)
                                break;
                        case "signup_confirm_password":
                                setConfirmPassword(event.target.value)
                                break;
                        default:
                                break;
                }
        }

        const handlePasswordVisibility = () => {
                setPasswordVisible(!passwordVisible)
        }

        const handleConfirmPasswordVisibility = () => {
                setConfirmPasswordVisible(!confirmPasswordVisible)
        }

        const handleSubmit = async event => {
                event.preventDefault()
                try {
                        const response = await axios.post(
                                'https://gummy-notes.herokuapp.com/api/v1/users',
                                {
                                        name,
                                        email,
                                        password,
                                        confirmPassword
                                },
                                { withCredentials: true }
                        )
                        setName('')
                        setEmail('')
                        setPassword('')
                        setConfirmPassword('')
                        dispatchSignup(response.data)
                        history.push('/home')
                } catch (err) {
                        console.error(err)
                }
        }

        return (
                <div className="signup_page">
                        <LogoTitle />
                        <div className="signup_form">
                                <form onSubmit={handleSubmit}>
                                        <div className="name">
                                                <div className="name_icon icon">
                                                        <PersonSharpIcon style={{ color: "#818181" }} />
                                                </div>
                                                <div className="name_field">
                                                        <input 
                                                                type="text" 
                                                                placeholder="Name" 
                                                                name="signup_name" 
                                                                value={name}
                                                                onChange={handleChange} 
                                                                autoFocus
                                                                required
                                                        />
                                                </div>
                                        </div>
                                        <div className="email">
                                                <div className="email_icon icon">
                                                        <EmailIcon style={{ color: "#818181" }} />
                                                </div>
                                                <div className="email_field">
                                                        <input 
                                                                type="email" 
                                                                placeholder="Email" 
                                                                name="signup_email" 
                                                                value={email}
                                                                onChange={handleChange} 
                                                                required
                                                        />
                                                </div>
                                        </div>
                                        <div className="password">
                                                <div className="password_icon icon" onClick={handlePasswordVisibility}>
                                                        {
                                                                passwordVisible 
                                                                ? <VisibilitySharpIcon style={{ color: "#818181" }} /> 
                                                                : <VisibilityOffSharpIcon style={{ color: "#818181" }} />
                                                        }
                                                </div>
                                                <div className="password_field">
                                                        <input 
                                                                type={
                                                                        passwordVisible 
                                                                        ? 'text' 
                                                                        : 'password'
                                                                } 
                                                                placeholder="Password" 
                                                                name="signup_password" 
                                                                value={password}
                                                                onChange={handleChange}
                                                                required
                                                        />
                                                </div>
                                        </div>
                                        <div className="confirm">
                                                <div className="password_icon icon" onClick={handleConfirmPasswordVisibility}>
                                                        {
                                                                confirmPasswordVisible 
                                                                ? <VisibilitySharpIcon style={{ color: "#818181" }} /> 
                                                                : <VisibilityOffSharpIcon style={{ color: "#818181" }} />
                                                        }
                                                </div>
                                                <div className="confirm_password_field">
                                                        <input 
                                                                type={
                                                                        confirmPasswordVisible 
                                                                        ? 'text' 
                                                                        : 'password'
                                                                } 
                                                                placeholder="Confirm password" 
                                                                name="signup_confirm_password" 
                                                                value={confirmPassword}
                                                                onChange={handleChange}
                                                                required
                                                        />
                                                </div>
                                        </div>
                                        <div className="submit_button">
                                                <button type="submit">
                                                        Signup
                                                </button>
                                        </div>
                                </form>
                        </div>
                        <div className="or_login">
                                Already with us?  <NavLink to="/login">Login</NavLink>
                        </div>
                        <MenuFooter />
                </div>
        )
}

export default Signup
