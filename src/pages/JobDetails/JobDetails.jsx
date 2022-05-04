import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './jobDetails.css';
import locationIcon from './smalllocationicon.png';
import favoriteButton from './favoriteButton.png';
import mailIcon from './mailicon.png'
function JobDetails({ jobs }) {
  const { id } = useParams();

  const filteredJob = jobs.filter((elem, idx) => elem.id === id);

  const mappedFilteredJob = filteredJob.map((elem, idx) => {
    const handleClick = () => {
      window.open(`${elem.url}`);
    };

    const url = elem.url;
    return (
      <>
        <div className="jobDetailsContainer" key={`job-detail-${idx}`}>
          <div className='industry'>Icon</div>
          <div className="jobDetailsMini">
            <div className="jobDetailsLeft">
              <div className="positionDiv">
                <h3 className="position">{elem.position}</h3>
              </div>
              <div className="companyLocationDiv">
                <h3 className="company">{elem.company}</h3>
                <div className="locationDiv">
                  <img width="8px" height="10px" src={locationIcon}></img>
                  <h3 className="location">{elem.location}, WA</h3>
                </div>
              </div>
                <div className="wageDiv">
                  <h3 className="wage">${elem.compensation}<span className='hour'>/Hour</span></h3>
                </div>
              <div className='acessoriesDiv'>

              <div className="acessories">Icon</div>
              <div className="acessories">Icon</div>
              <div className="acessories">Icon</div>
              </div>
            </div>
            <div className="jobDetailsRight">
              <img src={favoriteButton}></img>
            </div>
          </div>
          <div className="descriptionDiv">
            <h2 className="description">Description</h2>
            <p className="descriptionText">{elem.description}</p>
          </div>
        <button className='contactButton'>
            <img src={mailIcon}/>
            <h4 className='contactButtonText'>Contact</h4>
        </button>
        <button className='contactButton' onClick={handleClick}>
            <img src={mailIcon}/>
            <h4 className='contactButtonText'>Apply</h4>
        </button>
        </div>
      </>
    );
  });

  return (
    <>
      {mappedFilteredJob}
      <Link to="/">Back</Link>
    </>
  );
}

export default JobDetails;
