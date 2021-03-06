import "./JobForm.styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";

const defaultFormFieds = {
  company: "",
  position: "",
  time: "",
  city: "",
  industry: "",
  state: "",
  contact: "",
  description: "",
  compensation: "",
  address: "",
  url: "",
};

const JobForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(defaultFormFieds);
  const [isOpen, setIsOpen] = useState(false);

  const {
    company,
    position,
    time,
    city,
    industry,
    state,
    contact,
    description,
    compensation,
    address,
    url,
  } = form;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase.from("Jobs").insert([
      {
        company: company,
        position: position,
        time: time,
        city: city,
        industry: industry,
        state: state,
        contact: contact,
        description: description,
        compensation: compensation,
        address: address,
        url: url,
      },
    ]);

    if (data) {
      navigate("/");
    } else {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  //toggle popup function
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="masterDiv">
      <div className="form-full-div">
        <h1 className="form-h1">Post a Job</h1>
        <form
          onSubmit={handleSubmit}
          className="job-form"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <h3 className="job-form-sub-title">Job Form</h3>
          <p className="job-form-sub-statement">
            Fill out the fields below to post a job!
          </p>
          <label htmlFor="company-name"></label>
          <input
            value={company}
            onChange={handleChange}
            placeholder="Company Name"
            required
            name="company"
            type="text"
            className="job-input"
          ></input>
          <label htmlFor="position"></label>
          <input
            value={position}
            onChange={handleChange}
            placeholder="Job Title"
            required
            name="position"
            type="text"
            className="job-input"
          ></input>
          <label htmlFor="status"></label>
          <select
            required
            style={{ color: "grey" }}
            name="time"
            value={time}
            onChange={handleChange}
            className="job-input"
          >
            <option value="" disabled hidden selected>
              full-time or part-time work
            </option>
            <option>full-time</option>
            <option>part-time</option>
          </select>
          <label hidden htmlFor="industry"></label>
          <select
            required
            name="industry"
            style={{ color: "grey" }}
            value={industry}
            onChange={handleChange}
            className="job-input"
          >
            <option value="" disabled selected hidden>
              select an industry
            </option>
            <option>Construction</option>
            <option>Transportation</option>
            <option>Cleaning</option>
            <option>Caretaking</option>
            <option>Gardening</option>
            <option>Technology</option>
            <option>Education</option>
            <option>Food/Beverages</option>
            <option>Other</option>
          </select>

          <label hidden htmlFor="city"></label>
          <select
            required
            name="city"
            style={{ color: "grey" }}
            value={city}
            onChange={handleChange}
            className="job-input"
          >
            <option value="" disabled selected hidden>
              select a city
            </option>
            <option>Tacoma</option>
            <option>Seattle</option>
            <option>Olympia</option>
            <option>Vancouver</option>
            <option>Bellevue</option>
            <option>Kent</option>
            <option>Federal Way</option>
            <option>Auburn</option>
            <option>Lakewood</option>
            <option>Gig Harbor</option>
            <option>Remote</option>
            <option>Other</option>
          </select>
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
          <label htmlFor="contact"></label>
          <input
            type="text"
            value={contact}
            onChange={handleChange}
            placeholder="Contact email"
            required
            name="contact"
            className="job-input"
          ></input>
          <label htmlFor="compensation"></label>
          <input
            type="text"
            value={compensation}
            onChange={handleChange}
            required
            placeholder="Hourly Compensation (ex: 60)"
            name="compensation"
            className="job-input"
            maxLength="3"
          ></input>
          <label htmlFor="address"></label>
          <input
            type="text"
            value={address}
            onChange={handleChange}
            placeholder="Address"
            name="address"
            className="job-input"
            required
          ></input>
          <label htmlFor="company-website"></label>
          <input
            required
            type="text"
            value={url}
            onChange={handleChange}
            placeholder="Company Website"
            name="url"
            className="job-input"
          ></input>
          <label htmlFor="description"></label>
          <textarea
            required
            wrap="hard"
            className="job-description-box"
            type="text"
            value={description}
            onChange={handleChange}
            placeholder="Job Description"
            name="description"
          ></textarea>

          <input
            type="submit"
            value="Submit"
            className="job-form-submit"
            onClick={togglePopup}
          />
        </form>
      </div>
    </div>
  );
};

export default JobForm;
