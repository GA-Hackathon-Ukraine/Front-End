import { Link } from "react-router-dom";
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

  const getJob = async () => {
    const { data, error } = await supabase
      .from("Jobs")
      .select()
      .match({ id: id });
    setJob(data);
    if (error) {
      console.log(error);
    }

    console.log(data);
  };

  useEffect(() => {
    getJob();
  }, []);

  // const filteredJob = jobs.filter((elem, idx) => elem.id === id);

  const mappedFilteredJob = job.map((elem, idx) => {
    console.log(elem);
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
    function weblink() {
      // window.location=`${elem.url}`;
      window.location.href("www.google.com");
    }

    const handleFavorite = () => {
      document.getElementById("favbutton");
    };

    const handleFavoriteButton = async (job) => {
      // checks if favorite is already made by that user on that job.

      const { data, error } = await supabase
        .from("Favorites")
        .insert([{ user_id: auth.user.id, job_id: elem.id }]);

      console.log(data, error);

      // if there the user already has favorated the job, unfavorite it.
    };

    const url = elem.url;
    return (
      <div key={`jobish-${idx}`}>
        <div className="jobDetailsContainer" key={`job-detail-${idx}`}>
          <div className="industry">
            <img width="20%" src={industry} />
          </div>
          <div className="jobDetailsMini">
            <div className="jobDetailsLeft">
              <div className="positionDiv">
                <h3 style={{ color: "white" }} className="positionn">
                  {elem.position}
                </h3>
              </div>
              <div className="companyLocationDiv">
                <h3 className="company">{elem.company}</h3>
                <div className="locationDiv">
                  <img width="10px" height="20px" src={locationIcon}></img>
                  <h3 className="location">{elem.city}, WA</h3>
                </div>
              </div>
              <div className="wageDiv">
                <h3 className="wage">
                  ${elem.compensation}
                  <span className="hour">/Hour</span>
                </h3>
              </div>
              <div className="acessoriesDiv">
                <div className="acessories">
                  <img src={partTime}></img>
                </div>
                <div className="acessories">
                  <img src={childCare}></img>
                </div>
              </div>
            </div>
            <div className="jobDetailsRight">
              {/* {favorites.forEach((fav) => {
                fav.id === elem.id ? <img onClick={()=>handleOnClick(elem)} id="favbutton" src={favoriteButton}></img> : <img onClick={()=>handleOnClick(elem)} id="favbutton" src={favred}></img>
              })} */}

              <img
                onClick={() => handleFavoriteButton(elem)}
                id="favbutton"
                src={favoriteButton}
              ></img>
            </div>
          </div>
          <div className="descriptionDiv">
            <h2 className="description">Description</h2>
            <p className="descriptionText">{elem.description}</p>
          </div>
          <a id="emailMe" href={"mailto:" + `${elem.contact}`}>
            <button className="contactButton">
              <img src={mailIcon} />
              <h4 className="contactButtonText">Contact</h4>
            </button>{" "}
          </a>
          <a id="applyHere" target="_blank" href={"https://" + `${elem.url}`}>
            <button className="applyButton">
              <img src={apply} />
              <h4 className="applyButtonText">Apply</h4>
            </button>
          </a>
        </div>
      </div>
    );
  });
  return <>{mappedFilteredJob}</>;
}

export default JobDetails;
