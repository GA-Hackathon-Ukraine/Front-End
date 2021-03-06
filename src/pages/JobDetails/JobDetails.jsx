import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./jobDetails.css";
import locationIcon from "./smalllocationicon.svg";
import favoriteButton from "./favoriteButton.svg";
import favred from "./icons/redfav.svg";
import mailIcon from "./mailicon.png";
import childCare from "./childcard.png";
import partTime from "./parttime.svg";
import apply from "./apply.svg";
import constructionIcon from "./icons/construction.svg";
import caregive from "./icons/caretaking.svg";
import technologyIcon from "./icons/technology.svg";
import foodandbeveragesIcon from "./icons/food.svg";
import landscape from "./icons/landscaping.svg";
import transport from "./icons/transportation.svg";
import cleaning from "./icons/nclean.svg";
import { supabase } from "../../utils/supabaseClient";
import { useAuth } from "../../utils/auth";

function JobDetails() {
  const auth = useAuth();
  const { id } = useParams();

  const [job, setJob] = useState([]);

  const [favorited, setFavorited] = useState(false);

  const getJob = async () => {
    const { data, error } = await supabase
      .from("Jobs")
      .select()
      .match({ id: id });
    setJob(data);

    if (error) {
      console.log(error);
    }

    if (auth.user) {
      const { data, error } = await supabase
        .from("Favorites")
        .select()
        .match({ job_id: id, user_id: auth.user.id });

      if (error) {
        console.log(error);
      }
      if (data.length > 0) {
        setFavorited(true);
      } else {
        setFavorited(false);
      }
    }
  };

  useEffect(() => {
    getJob();
  }, []);

  // const filteredJob = jobs.filter((elem, idx) => elem.id === id);

  const mappedFilteredJob = job.map((elem, idx) => {
    let industry;
    switch (elem.industry) {
      case "Cleaning":
        industry = cleaning;
        break;
      case "Transportation":
        industry = transport;
        break;
      case "Landscaping":
        industry = landscape;
        break;
      case "Caretaking":
        industry = caregive;
        break;
      case "Technology":
        industry = technologyIcon;
        break;
      case "Food/Beverages":
        industry = foodandbeveragesIcon;
        break;
      default:
        industry = constructionIcon;
    }

    const handleFavoriteButtonSave = async (job) => {
      if (auth.user) {
        const { data, error } = await supabase
          .from("Favorites")
          .insert([{ user_id: auth.user.id, job_id: job.id }]);
        setFavorited(true);
        if (error) {
          console.log(error);
        }
      } else {
        handlePopUp();
      }
    };

    const handleFavoriteButtonDelete = async (job) => {
      const { data, error } = await supabase
        .from("Favorites")
        .delete()
        .match({ job_id: job.id, user_id: auth.user.id });
      setFavorited(false);
      if (error) {
        console.log(error);
      }
    };

    const handlePopUp = () => {
      let popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    };
    return (
      <div key={`jobish-${idx}`}>
        <div style={{ paddingTop: "120px" }}>
          <div className="jobDetailsContainer">
            <div className="industry">
              <img
                className="weird-image-resize"
                alt={`industry-${elem.industry}`}
                width="20%"
                src={industry}
              />
            </div>
            <div className="jobDetailsMini">
              <div className="jobDetailsLeft">
                <div className="positionDiv">
                  <h3 className="positionn-jobs-detail">{elem.position}</h3>
                </div>
                <div className="companyLocationDiv">
                  <h3 className="company">{elem.company}</h3>
                  <div className="locationDiv">
                    <img
                      alt={`city-${elem.city}`}
                      width="10px"
                      height="20px"
                      src={locationIcon}
                    ></img>
                    <h3 className="location">{elem.city}, WA</h3>
                  </div>
                </div>
                <div className="wageDiv">
                  <h3 className="slider-card-wrapper-compensation jobs-details-page-compensation">
                    ${elem.compensation}
                    <span className="per-hour jobs-details-page-compensation">
                      /Hour
                    </span>
                  </h3>
                </div>
                <div className="acessoriesDiv">
                  <div className="acessories">
                    <img alt={`status-${idx + 1}`} src={partTime}></img>
                  </div>
                  {/* <div className="acessories">
                  <img alt={`status-${idx + 2}`} src={childCare}></img>
                </div> */}
                </div>
              </div>
              <div className="jobDetailsRight">
                <div className="popup">
                  <span className="popuptext" id="myPopup">
                    Login to favorite
                  </span>
                  {favorited ? (
                    <img
                      onClick={() => handleFavoriteButtonDelete(elem)}
                      id="favbutton"
                      alt="favorite-button-red"
                      src={favred}
                    ></img>
                  ) : (
                    <img
                      onClick={() => handleFavoriteButtonSave(elem)}
                      id="favbutton"
                      alt="favorite-button-grey"
                      src={favoriteButton}
                    ></img>
                  )}
                </div>
              </div>
            </div>
            <div className="descriptionDiv">
              <h2 className="description">Description</h2>
              <p className="descriptionText">{elem.description}</p>
            </div>
            <a id="emailMe" href={`mailto:${elem.contact}`}>
              <button className="contactButton">
                <img src={mailIcon} alt="mail-icon" />
                <h4 className="contactButtonText">Contact</h4>
              </button>{" "}
            </a>
            <a
              rel="noreferrer"
              id="applyHere"
              target="_blank"
              href={`https://${elem.url}`}
            >
              <button className="applyButton">
                <img alt="apply-icon" src={apply} />
                <h4 className="applyButtonText">Apply</h4>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  });
  return <>{mappedFilteredJob}</>;
}

export default JobDetails;
