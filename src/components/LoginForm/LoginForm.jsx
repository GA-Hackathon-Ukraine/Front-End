import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './loginform.css'
import * as authService from '../../services/authService'
import { supabase } from '../../utils/supabaseClient'
import { useAuth } from '../../utils/auth'

const LoginForm = ({ userState, setUser }) => {
  const auth = useAuth()
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    // props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const signIn = await auth.login(formData.email, formData.pw)

    if (signIn.error) {
      setMessage(signIn.error.message)
    } else {
      setMessage("Welcome")
    }

    navigate('/')
    console.log(signIn.user)

    // try {

    //   const { user, session, error } = await supabase.auth.signIn({
    //     email: formData.email,
    //     password: formData.pw,
    //   })

    //   setUser(session)
    //   console.log('user', user)
    //   console.log('session', session)
    //   console.log('error', error)
    //   // await authService.login(formData)
    //   // props.handleSignupOrLogin()
    //   navigate('/')
    // } catch (err) {
    //   // props.updateMessage(err.message)
    //   console.log(err)
    // }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="signin-form-container"
    >
      {/* email field */}
      <div className="signin-input-container">
        <label htmlFor="email"></label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          placeholder='Email'
          onChange={handleChange}
          className="sign-in-input"
        />
      </div>
      {/* sign in field */}
      <div className="signin-input-container">
        <label htmlFor="password"></label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          placeholder='Password'
          onChange={handleChange}
          className="sign-in-input"
        />
      </div>
      {/* forget password */}
      <Link to="/"><p className="forgot-password">Forgot Password?</p></Link>
      {/* sign in button */}
      <div>
        <button className="signin-button">Sign In</button>
      </div>
      {/* link to make an account */}
      <p className="need-account">Don't have an account? <Link className="signup" to="/signup">Sign Up</Link></p>
    </form>
  )
}

export default LoginForm