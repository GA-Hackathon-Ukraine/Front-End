import './JobForm.styles.css'


import { useState } from 'react'

const defaultFormFieds = {
  name:"",
  position:"",

}



const JobForm = () => {



  const [form, setForm] = useState({
    name:""
  })


  return (
    <>
      <form style={{display: "flex", flexDirection: "column", width:"300px", margin: "0 auto"}}>
      <h1>Job Form</h1>
        <label htmlFor="company-name">Name:</label>
        <input 
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <label htmlFor="position">Position:</label>
        <input type="text"></input>
        <label htmlFor="status">Status:</label>
        <input type="text"></input>
        <label htmlFor="city">City:</label>
        <input type="text"></input>
        <label htmlFor="state">State:</label>
        <input type="text"></input>
        <label htmlFor="contact">Contact:</label>
        <input type="text"></input>
        <label htmlFor="description">Description:</label>
        <input type="text"></input>
        <label htmlFor="date-posted">Date Posted:</label>
        <input type="text"></input>
        <label htmlFor="address">Address:</label>
        <input type="text"></input>
        <label htmlFor="company-website">Company Website:</label>
        <input type="url"></input>
        <input type="submit" value="submit"/>
      </form>
    </>
  )
}

export default JobForm