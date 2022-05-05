import './JobForm.styles.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const defaultFormFieds = {
  company:"",
  position: "",
  full_time: '',
  city: "",
  state: '',
  contact: "",
  description: "",
  compensation: "",
  address: "",
  url: "",
}



const JobForm = () => {

  const navigate = useNavigate()

  const [form, setForm] = useState(defaultFormFieds)
  const [isOpen, setIsOpen] = useState(false);

  const { company, position, full_time, city, state, contact, description, compensation, address, url } = form

  const handleSubmit = async (event) => {
    event.preventDefault()
    try{

    const response = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/jobs/`, form)

    console.log(response.data)

    navigate('/')


  } catch(err){
    console.log()
  }
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

    <><br />
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width:"300px", margin: "0 auto"}}>
        <h1>Job Form</h1>

        
        {/* company name */}
        <label htmlFor="company-name"></label>
        <input 
          value={company}
          onChange={handleChange}
          placeholder="Company Name"
          required
          name="company"
          type='text'
          className="job-input"
        ></input>

        {/* position */}
        <label htmlFor="position"></label>
        <input
          value={position}
          onChange={handleChange}
          placeholder="Job Title"
          required
          name="position"
          type='text'
          className="job-input"
        >
        </input>

        {/* status */}
        <label htmlFor="status"></label>
        <input
          type="text"
          value={full_time}
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
          value={url}
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
      <br />
      <br />
    </>
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