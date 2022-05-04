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
  datePosted: "",
  address: "",
  companyWebsite: "",
}



const JobForm = () => {



  const [form, setForm] = useState(defaultFormFieds)

  const { companyName, jobTitle, fullTime, city, state, contact, description, datePosted, address, companyWebsite } = form

  const handleSubmit = (event) => {
    event.preventDefault()

    // post axios call
    console.log(form)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({...form, [name]: value})
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width:"300px", margin: "0 auto"}}>
        <h1>Job Form</h1>
        
        <label htmlFor="company-name">Company Name:</label>
        <input 
          value={companyName}
          onChange={handleChange}
          placeholder="Company name"
          required
          name="companyName"
          type='text'
        />

        <label htmlFor="position">Job title:</label>
        <input
          value={jobTitle}
          onChange={handleChange}
          placeholder="Job title"
          required
          name="jobTitle"
          type='text'
        >
        </input>

        <label htmlFor="status">Status:</label>
        <input
          type="text"
          value={fullTime}
          onChange={handleChange}
          placeholder="Full time"
          name="fullTime"
          >
        </input>

        <label htmlFor="city">City:</label>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="City"
          required
          name="city"
        ></input>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          value={state}
          onChange={handleChange}
          placeholder="State"
          required
          name="state"
// 
        ></input>
        <label htmlFor="contact">Contact:</label>
        <input 
        
        type="text"
          value={contact}
          onChange={handleChange}
          placeholder="contact"
          required
          name="contact"
        ></input>
        <label htmlFor="description">Description:</label>
        <input 
        
        type="text"
          value={description}
          onChange={handleChange}
          placeholder="Description"
          name="description"></input>
        
        <label htmlFor="date-posted">Date Posted:</label>
        <input 
        // 
        type="text"
          value={datePosted}
          onChange={handleChange}
          placeholder="Date Posted"
          name="datePosted"></input>
        
        <label htmlFor="address">Address:</label>
        <input 

        type="text"
          value={address}
          onChange={handleChange}
          placeholder="Address"
          name="address"></input>
        <label htmlFor="company-website">Company Website:</label>
        <input 
        type="text"
          value={companyWebsite}
          onChange={handleChange}
          placeholder="Company Website"
          name="companyWebsite">
        </input>

        <input type="submit" value="submit"/>
      </form>
    </>
  )
}

export default JobForm