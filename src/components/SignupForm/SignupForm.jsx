import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signupform.css'
import * as authService from '../../services/authService'
import { supabase } from '../../utils/supabaseClient'

const SignupForm = ({userState, setUser}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const { name, email, password, passwordConf } = formData

  const handleChange = e => {
    // props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { user, session, error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
        },
        {
          data: { 
            first_name: name,
            favorites: []
          }
        }
      )
      setUser(session)
      console.log('user', user)
      console.log('session', session)
      console.log('error', error)
      // await authService.signup(formData)
      // props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      // props.updateMessage(err.message)
      console.log(err)
    }
  }


  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="sign-up-form-container"
    >
      {/* name field */}
      <div className="sign-up-input-container">
        <label htmlFor="name"></label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="Name"
          className="sign-up-input"
        />
      </div>
      {/* email field */}
      <div className="sign-up-input-container">
        <label htmlFor="email"></label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="sign-up-input"
        />
      </div>
      {/* password field */}
      <div className="sign-up-input-container">
        <label htmlFor="password"></label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="sign-up-input"
        />
      </div>
      {/* password confirm field */}
      <div className="sign-up-input-container">
        <label htmlFor="confirm"></label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
          placeholder="Confirm Password"
          className="sign-up-input"
        />
      </div>
      <div className="sign-up-button-container">
        <button disabled={isFormInvalid()} className="sign-up-button">
          Create account
        </button>
      </div>
      {/* link to make an account */}
      <p className="have-account">Already have an account? <Link class="signin" to="/login">Sign In</Link></p>
    </form>
  )
}

export default SignupForm