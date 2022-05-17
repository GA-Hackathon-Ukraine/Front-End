import "./JobsMapCard.styles.css";
import { Link } from "react-router-dom";
import HandleDeleteBtn from "../HandleDeleteBtn/HandleDeleteBtn";
import locationImg from '../../../src/location-red.svg'

const JobsMapCard = ({ elem, industry, handleDelete, showFave }) => {
  return (
    <>
      <div className="jobsmap-card-wrapper">
        <div className="jobsmap-card">
          <div>
            <img
              className="card-image"
              src={industry}
              alt={`card image for ${industry}`}
            />
          </div>
          <div className="card-information-wrapper">
            <div className="card-information-position">
              <h3 className="heading-jobsmap-position-title">
                {elem.position}
              </h3>
              <h5 className="company-title jobs-map-card-spacing">
                {elem.company}
              </h5>
            </div>
            <div className="card-information-pay">
              <h3 className="slider-card-wrapper-compensation">
                ${elem.compensation}
                <span className="text-span">/Hour</span>
              </h3>
            </div>
            <div className="card-information-location">
              <div className="div-block">
                <img
                  className="location-img-slider"
                  src={locationImg}
                  alt=""
                />
                <h5 className="location-wa">{elem.city}</h5>
              </div>
            </div>
            <div className="card-information-detailsbtn">
              <Link to={`/job/${elem.id}`} className="button-2 w-button">
                Details
              </Link>
              <HandleDeleteBtn elem={elem} handleDelete={handleDelete} showFave={showFave}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsMapCard;
