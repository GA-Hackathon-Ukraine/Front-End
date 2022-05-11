// import dummydata from './dummydata';
import { Link } from 'react-router-dom';
import './JobsMap.styles.css';
import locationIcon from '../../../src/location.svg';
import messageIcon from '../../../src/message.svg';
import savedUnfilled from '../../../src/saved-unfilled.svg';
import constructionIcon from '../../../src/construction.svg';
import technologyIcon from '../../../src/technology.svg';
import foodandbeveragesIcon from '../../../src/food.svg'
import transportationIcon from '../../../src/transportation.svg'
import caretakingIcon from '../../../src/caretaking.svg'
import educationIcon from '../../../src/education.svg'
import cleaningIcon from '../../../src/cleaning.svg'
import { supabase } from '../../utils/supabaseClient';
import { useEffect, useState } from 'react';




const JobsMap = ({combinedFilteredSearch}) => {

  const mappedData = combinedFilteredSearch.map((elem, idx) => {

    let industry;
    // This needs ot be refactored later. adding new images .. etc.
    switch (elem.industry) {
      case 'Technology':
        industry = technologyIcon;
        break;
      case 'Food/Beverages':
        industry = foodandbeveragesIcon;
        break;
      case 'Transportation':
        industry = transportationIcon;
        break;
      case 'Caretaking':
        industry = caretakingIcon;
        break;
      case 'Education':
        industry = educationIcon;
        break;
      case 'Cleaning':
        industry = cleaningIcon;
        break;
      case 'Gardening':
        industry = cleaningIcon;
        break;
      case 'Other':
        industry = cleaningIcon;
        break;
      default:
        industry = constructionIcon;
    }
    return (
      <div key={idx} className="card-wrapper">
        <Link
          className="card-wrapper-container"
          key={`job-${idx}`}
          to={`/job/${elem.id}`}
        >
          <div className="image-container">
            <div
              style={{
                marginLeft: '5px',
                width: '90px',
                height: '90px',
                backgroundColor: '#FFCC00',
                borderRadius: '7px',
                backgroundImage: `url(
                             ${industry}
                            )`,
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover',
              }}
            />
          </div>
          <div className="card-wrapper-info">
            {/* <div className='card-wrapper-info-left'>
                            <div className='card-wrapper-info-left-top'>
                                <h2 className='position-name'>{elem.position}</h2>
                                <h3 className='company-name'>{elem.company}</h3>
                            </div>
                            <div className='card-wrapper-info-left-bottom'>
                                
                            </div>
                        </div> */}
            <div className="card-wrapper-info-top">
              <div className="card-wrapper-info-top-header">
                <div>
                  <h2 className="position">{elem.position}</h2>
                </div>
                <div className="hourly-rate">
                  <h3 className="compensation">${elem.compensation}</h3>
                  <span className="per-hour">/Hour</span>
                </div>
              </div>
              <div className="card-wrapper-info-top-lower">
                <div>
                  {' '}
                  <h4 className="company-jobsmap">{elem.company}</h4>{' '}
                </div>
                <div className="location-wrapper-jobsmap">
                  <img className="img-jobsmap" src={locationIcon} />
                  <h4 className="location-jobsmap">{elem.city}</h4>,
                  <h4 className="location-jobsmap">{elem.state}</h4>
                </div>
              </div>
            </div>
            <div className="card-wrapper-info-bottom">
              <div className="card-wrapper-info-bottom">
                <div className="card-wrapper-info-bottom-left">
                  <div className="btn-group-jobsmap">
                    <button className="details-btn">details</button>
                    <button className="email-btn">
                      {' '}
                      <img src={messageIcon} />
                    </button>
                  </div>
                  <div>
                    <span className="saved-unfilled-wrapper">
                      {' '}
                      <img
                        className="save-btn-swipe-section"
                        src={savedUnfilled}
                      />
                    </span>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="card-wrapper-info-left">
              {/* <img src={locationIcon} /> */}
            </div>
          </div>
          {/* <div className='jobs-container'>
                        <h3>{elem.company}</h3>
                        <h3>{elem.position}</h3>
                        <h3>{elem.location}</h3>
                       </div> */}
        </Link>
      </div>
    );
  });

  return <>{mappedData}</>;
};

export default JobsMap;
