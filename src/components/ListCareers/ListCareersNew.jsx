import "./ListCareersNew.styles.css";
import caretaking from "../../../src/caretaking.svg";
import cleaning from "../../../src/cleaning.svg";
import construction from "../../../src/construction.svg";
import transportation from "../../../src/transportation.svg";

import gardening from "../../../src/gardening.svg";
import technology from "../../../src/technology.svg";
import education from "../../../src/education.svg";
import food from "../../../src/food.svg";

const ListCareersNew = ({ setSearchShow, setPosition }) => {
  const handleIndustryChoice = (industry) => {
    setSearchShow(true);
    setPosition(industry);
  };

  return (
    <div className="listcareers-wrapper">
      <h2 className="section-title">Search by Industry</h2>
      <div className="grid-wrapper-careers">
        <div className="grid-careers">
          <img
            alt="construction worker with hardhat"
            onClick={() => handleIndustryChoice("construction")}
            className="grid-careers-image"
            src={construction}
          />
          <img
            alt="a car"
            onClick={() => handleIndustryChoice("transportation")}
            className="grid-careers-image"
            src={transportation}
          />
          <img
            alt="a sweeping broom"
            onClick={() => handleIndustryChoice("cleaning")}
            className="grid-careers-image"
            src={cleaning}
          />
          <img
            alt="an adult and a child holding hands"
            onClick={() => handleIndustryChoice("caretaking")}
            className="grid-careers-image"
            src={caretaking}
          />
          <img
            alt="a plant in a pot"
            onClick={() => handleIndustryChoice("gardening")}
            className="grid-careers-image"
            src={gardening}
          />
          <img
            alt="a computer screen"
            onClick={() => handleIndustryChoice("technology")}
            className="grid-careers-image"
            src={technology}
          />
          <img
            alt="a graduation hat"
            onClick={() => handleIndustryChoice("education")}
            className="grid-careers-image"
            src={education}
          />
          <img
            alt="a fork and knife"
            onClick={() => handleIndustryChoice("food")}
            className="grid-careers-image"
            src={food}
          />
        </div>
      </div>
    </div>
  );
};

export default ListCareersNew;
