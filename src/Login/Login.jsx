import React, {  useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuFooter from '../Home/MenuDrawer/MenuFooter/MenuFooter'
import './Login.css'
import LogoTitle from './LogoTitle/LogoTitle'
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffSharpIcon from '@material-ui/icons/VisibilityOffSharp';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import axios from 'axios'
import UserContext from '../Context/userContext'

const Login = ({ history }) => {
        const userContext = useContext(UserContext)
        const { dispatchLogin } = userContext.actions

        const [passwordVisible, setPasswordVisible] = useState(false)
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const handleChange = event => {
                switch(event.target.name) {
                        case "login_email":
                                setEmail(event.target.value)
                                break;
                        case "login_password":
                                setPassword(event.target.value)
                                break;
                        default:
                                break;
                }
        }

        const handlePasswordVisibility = () => {
                setPasswordVisible(!passwordVisible)
        }

        const handleSubmit = async event => {
                event.preventDefault()
                try {
                        const response = await axios.post(
                                'https://gummy-notes.herokuapp.com/api/v1/auth',
                                {
                                        email,
                                        password,
                                },
                                { withCredentials: true }
                        )
                        setEmail('')
                        setPassword('')
                        dispatchLogin(response.data)
                        history.push('/home')
                } catch (err) {
                        console.error(err)
                }
        }

        return (
                <div className="login_page">
                        <LogoTitle />
                        <div className="login_form">
                                <form onSubmit={handleSubmit}>
                                        <div className="email">
                                                <div className="email_icon icon">
                                                        <EmailIcon style={{ color: "#818181" }} />        
                                                </div>
                                                <div className="email_field">
                                                        <input 
                                                                type="email" 
                                                                placeholder="Email" 
                                                                name="login_email" 
                                                                value={email}
                                                                onChange={handleChange}
                                                                autoFocus
                                                                required 
                                                        />
                                                </div>
                                        </div>
                                        <div className="password">
                                                <div className="password_icon icon" onClick={handlePasswordVisibility}>
                                                        {
                                                                passwordVisible ? <VisibilitySharpIcon style={{ color: "#818181" }} /> : <VisibilityOffSharpIcon style={{ color: "#818181" }} />
                                                        }
                                                </div>
                                                <div className="password_field">
                                                        <input 
                                                                type={ passwordVisible ? 'text' : 'password' }
                                                                placeholder="Password" 
                                                                name="login_password" 
                                                                value={password}
                                                                onChange={handleChange}
                                                                required
                                                        />
                                                </div>
                                        </div>
                                        <div className="submit_button">
                                                <button type="submit">
                                                        Login
                                                </button>
                                        </div>
                                </form>
                        </div>
                        <div className="or_signup">
                                No account? No problem. <NavLink to="/signup">Signup</NavLink>
                        </div>
                        <MenuFooter />
                </div>
        )
}

export default Login
