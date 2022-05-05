import './Saved.styles.css'

const Saved = (props) => {
  return (
    <div className="savedPage">
      <h1>Saved</h1>
      <div className="cardContainer">
        <div className="card">
          <div className="card-text">
            {/* {props.jobs.map(job => (
              <SavedJobs 
              key={job.id}
              job={job}
              />
            ))} */}
            Job card
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Saved