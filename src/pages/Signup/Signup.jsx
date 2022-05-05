import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './signup.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className="create-account-container">
      <h1 className='create-account-title'>Create an account</h1>
      <p>{message}</p>
      <div className="create-account-area">
        <h3 className='create-account-salutation'>Welcome</h3>
        <p className='create-account-salutation-subtitle'>Hello, create an account to continue!</p>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
      </div>
    </main>
  )
}

export default Signup