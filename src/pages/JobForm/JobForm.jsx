import './JobForm.styles.css'
import { useState } from 'react'

const defaultFormFieds = {
  companyName:"",
  jobTitle: "",
  fullTime: '',
  city: "",
  state: '',
  contact: "",
  description: "",
  compensation: "",
  datePosted: "",
  address: "",
  companyWebsite: "",
}



const JobForm = () => {
  //use states
  const [form, setForm] = useState(defaultFormFieds)
  const [isOpen, setIsOpen] = useState(false);

  //variables
  const { companyName, jobTitle, fullTime, city, state, contact, description, compensation, address, companyWebsite } = form

  //handle functions
  const handleSubmit = (event) => {
    event.preventDefault()

    // post axios call
    console.log(form)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({...form, [name]: value})
  }

  //toggle popup function
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="full-div">
      <h1>Post a Job</h1>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width:"100%", margin: "0 auto"}}>
        <h3>Job Form</h3>
        <p>Fill out the fields below to post a job!</p>
        
        <label htmlFor="company-name"></label>
        <input 
          value={companyName}
          onChange={handleChange}
          placeholder="Company Name"
          required
          name="companyName"
          type='text'
        />

        <label htmlFor="position"></label>
        <input
          value={jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
          required
          name="jobTitle"
          type='text'
        >
        </input>

        <label htmlFor="status"></label>
        <input
          type="text"
          value={fullTime}
          onChange={handleChange}
          placeholder="Full-time / Part-time"
          name="fullTime"
          >
        </input>

        <label htmlFor="city"></label>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="City"
          required
          name="city"
        ></input>
        <label htmlFor="state"></label>
        <input
          type="text"
          value={state}
          onChange={handleChange}
          placeholder="State"
          required
          name="state"
 
        ></input>
        <label htmlFor="contact"></label>
        <input 
        
        type="text"
          value={contact}
          onChange={handleChange}
          placeholder="Contact"
          required
          name="contact"
        ></input>
        
        <label htmlFor="company-website"></label>
        <input 
        type="text"
          value={compensation}
          onChange={handleChange}
          required
          placeholder="Compensation"
          name="compensation">
        </input>

        <label htmlFor="address"></label>
        <input 

        type="text"
          value={address}
          onChange={handleChange}
          placeholder="Address"
          name="address"></input>
        <label htmlFor="company-website"></label>
        <input 
        type="text"
          value={companyWebsite}
          onChange={handleChange}
          placeholder="Company Website"
          name="companyWebsite">
        </input>

        <label htmlFor="description"></label>
        <textarea 
        wrap="hard"
        className="description-box"
        type="text"
          value={description}
          onChange={handleChange}
          placeholder="Job Description"
          name="description"></textarea>

        <input type="submit" value="Submit" className="submit" onClick={togglePopup}/>
      </form>
      {isOpen && <Popup content={<>
        <b>You submitted a job!</b>
      </>} handleClose={togglePopup}/>}
    </div>
  )
}

export default JobForm


//popup component
const Popup = props => {
  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={props.handleClose}>X</span>
        {props.content}
      </div>
    </div>
  )
}