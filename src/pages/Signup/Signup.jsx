import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.module.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className="create-account-container">
      <h1 className='create-account-title'>Create an Account</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup
