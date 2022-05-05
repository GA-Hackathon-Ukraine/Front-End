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

  return (
    <><br />
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width:"300px", margin: "0 auto"}}>
        <h1>Job Form</h1>
        
        <label htmlFor="company-name">Company Name:</label>
        <input 
          value={company}
          onChange={handleChange}
          placeholder="Company name"
          required
          name="company"
          type='text'
        />

        <label htmlFor="position">Job title:</label>
        <input
          value={position}
          onChange={handleChange}
          placeholder="Job title"
          required
          name="position"
          type='text'
        >
        </input>

        <label htmlFor="status">Status:</label>
        <input
          type="text"
          value={full_time}
          onChange={handleChange}
          placeholder="Full time"
          name="full_time"
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
        
        <label htmlFor="compensation">Compensation</label>
        <input 
        type="text"
          value={compensation}
          onChange={handleChange}
          required
          placeholder="Compensation"
          name="compensation">
        </input>
       
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
          value={url}
          onChange={handleChange}
          placeholder="Company Website"
          name="url">
        </input>

        <input type="submit" value="submit"/>
      </form>
      <br />
      <br />
    </>
  )
}

export default JobForm