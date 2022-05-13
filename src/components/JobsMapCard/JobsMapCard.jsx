import './JobsMapCard.styles.css'

const JobsMapCard = ({ elem, locationImg, industry }) => {
  return (
    <>
      <div className="jobsmap-card-wrapper">
        <div className="jobsmap-card">
          <div>
            <img className="card-image" src={industry} alt={`card image for ${industry}`}/>
          </div>
          <div className="card-information-wrapper">
            <div className="card-information-position">
              <h3 className="heading-jobsmap-position-title">{elem.position}</h3>
              <h5 className="heading-jobsmap-position-company">{elem.company}</h5>
            </div> 
            <div className="card-information-pay">
              <h3 className="heading-jobsmap-position-compensation">${elem.compensation}<span className="text-span">/Hour</span></h3>
            </div>
            <div className="card-information-location">
              <div className="div-block">
                <img className="image-industry-jobsmap" src={locationImg} alt="" />
                <h6 className="heading-jobsmap-position-city">{elem.city}</h6>
              </div>
            </div>
            <div className="card-information-detailsbtn">
              <a href="#" className="button-2 w-button">Details</a>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default JobsMapCard