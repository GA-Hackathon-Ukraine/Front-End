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
    <div className="form-full-div">
      <h1 className="form-h1">Post a Job</h1>
      <form onSubmit={handleSubmit} className="job-form" style={{display: "flex", flexDirection: "column", width:"100%", margin: "0 auto"}}>
        <h3 className="job-form-sub-title">Job Form</h3>
        <p className="job-form-sub-statement">Fill out the fields below to post a job!</p>
        
        {/* company name */}
        <label htmlFor="company-name"></label>
        <input 
          value={companyName}
          onChange={handleChange}
          placeholder="Company Name"
          required
          name="companyName"
          type='text'
          className="job-input"
        />

        {/* position */}
        <label htmlFor="position"></label>
        <input
          value={jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
          required
          name="jobTitle"
          type='text'
          className="job-input"
        >
        </input>

        {/* status */}
        <label htmlFor="status"></label>
        <input
          type="text"
          value={fullTime}
          onChange={handleChange}
          placeholder="Full-time / Part-time"
          name="fullTime"
          className="job-input"
          >
        </input>

        {/* city */}
        <label htmlFor="city"></label>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="City"
          required
          name="city"
          className="job-input"
        ></input>

        {/* state */}
        <label htmlFor="state"></label>
        <input
          type="text"
          value={state}
          onChange={handleChange}
          placeholder="State"
          required
          name="state"
          className="job-input"
        ></input>

        {/* contact */}
        <label htmlFor="contact"></label>
        <input 
        type="text"
          value={contact}
          onChange={handleChange}
          placeholder="Contact"
          required
          name="contact"
          className="job-input"
        ></input>
        
        {/* compensation */}
        <label htmlFor="compensation"></label>
        <input 
        type="text"
          value={compensation}
          onChange={handleChange}
          required
          placeholder="Compensation"
          name="compensation"
          className="job-input"
          ></input>

        {/* address */}
        <label htmlFor="address"></label>
        <input 
          type="text"
          value={address}
          onChange={handleChange}
          placeholder="Address"
          name="address"
          className="job-input"
          ></input>

        {/* company website */}
        <label htmlFor="company-website"></label>
        <input 
        type="text"
          value={companyWebsite}
          onChange={handleChange}
          placeholder="Company Website"
          name="companyWebsite"
          className="job-input"
          ></input>

        {/* job description box */}
        <label htmlFor="description"></label>
        <textarea 
        wrap="hard"
        className="job-description-box"
        type="text"
          value={description}
          onChange={handleChange}
          placeholder="Job Description"
          name="description"></textarea>

        <input type="submit" value="Submit" className="job-form-submit" onClick={togglePopup}/>
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