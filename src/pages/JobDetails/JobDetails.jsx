import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './jobDetails.css';
import locationIcon from './smalllocationicon.svg';
import favoriteButton from './favoriteButton.svg';
import mailIcon from './mailicon.png'
import childCare from './childcard.png'
import partTime from './parttime.svg'
import apply from './apply.svg'
import constructionIcon from './icons/construction.svg';
import technologyIcon from './icons/technology.svg';
import foodandbeveragesIcon from './icons/food.svg'

function JobDetails({ jobs, setFavorites, favorites}) {
  const { id } = useParams();

  const filteredJob = jobs.filter((elem, idx) => elem.id === id);

  const mappedFilteredJob = filteredJob.map((elem, idx) => {

    let industry;
    switch (elem.industry) {
      case 'technology':
        industry = technologyIcon;
        break;
      case 'food/beverage':
        industry = foodandbeveragesIcon;
        break;
      default:
        industry = constructionIcon;
    }
    // const handleClick = () => {
    //   window.open(`${elem.url}`);
    // };

    const handleFavorite = ()=>{
      document.getElementById("favbutton")
    }

    const handleOnClick = (job)=>{
      // console.log(job)
      // localStorage.setItem("name", JSON.stringify(name));

      console.log(localStorage)


      setFavorites([...favorites, job])
    }

    const url = elem.url;
    return (
      <div key={`jobish-${idx}`} >
        <div className="jobDetailsContainer" key={`job-detail-${idx}`}>
          <div className='industry'>
            <img width="20%" src={industry}/></div>
          <div className="jobDetailsMini">
            <div className="jobDetailsLeft">
              <div className="positionDiv">
                <h3 className="positionn">{elem.position}</h3>
              </div>
              <div className="companyLocationDiv">
                <h3 className="company">{elem.company}</h3>
                <div className="locationDiv">
                  <img width="10px" height="20px" src={locationIcon}></img>
                  <h3 className="location">{elem.city}, WA</h3>
                </div>
              </div>
                <div className="wageDiv">
                  <h3 className="wage">${elem.compensation}<span className='hour'>/Hour</span></h3>
                </div>
              <div className='acessoriesDiv'>

              <div className="acessories">
                <img src={partTime}></img>
              </div>
              <div className="acessories">
                <img src={childCare}></img>
              </div>
    
              </div>
            </div>
            <div className="jobDetailsRight">
              <img onClick={()=>handleOnClick(elem)} id="favbutton" src={favoriteButton}></img>
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
        <button className='contactButton'>
            <img src={apply}/>
            <h4 className='contactButtonText'>Apply</h4>
        </button>
        </div>
      </div>
    );
  });

  return (
    <>
      {mappedFilteredJob}
    </>
  );
}

export default JobDetails;
