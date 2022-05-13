import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import constructionIcon from "../../../src/construction.svg";
import technologyIcon from "../../../src/technology.svg";
import foodandbeveragesIcon from "../../../src/food.svg";
import locationIcon from "../../../src/location.svg";
import messageIcon from "../../../src/message.svg";
import savedfilled from "../../../src/savedred.svg";
import transportationIcon from "../../../src/transportation.svg";
import caretakingIcon from "../../../src/caretaking.svg";
import cleaningIcon from "../../../src/cleaning.svg";
import educationIcon from "../../../src/education.svg";
import { supabase } from "../../utils/supabaseClient";

import { useAuth } from "../../utils/auth";
import { useEffect } from "react";
import { useState } from "react";

const Favorites = () => {
  const auth = useAuth();
  const [favJobs, setFavJobs] = useState([]);
  const [msg, setMsg] = useState("");

  const getFavorites = async () => {
    const { data, error } = await supabase
      .from("Favorites")
      .select()
      .match({ user_id: auth.user.id });

    if (error) {
      return console.log(error);
    }
    if (data.length === 0) {
      setMsg("You haven't saved any favorites!");
      return;
    }

    let favoritedJobs = [];
    for (const job of data) {
      const { data, error } = await supabase
        .from("Jobs")
        .select()
        .match({ id: job.job_id });
      favoritedJobs.push(data[0]);
      if (error) {
        console.log(error);
      }
    }
    setFavJobs(favoritedJobs);
    console.log(favJobs);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const handleDelete = async (jobId) => {
    const { data, error } = await supabase
      .from("Favorites")
      .delete()
      .match({ job_id: jobId, user_id: auth.user.id });

    if (error) {
      console.log(error);
    }
    getFavorites();
  };

  const mappedData = favJobs.map((elem, idx) => {
    let industry;
    switch (elem.industry) {
      case "Technology":
        industry = technologyIcon;
        break;
      case "Food/Beverages":
        industry = foodandbeveragesIcon;
        break;
      case "Transportation":
        industry = transportationIcon;
        break;
      case "Caretaking":
        industry = caretakingIcon;
        break;
      case "Education":
        industry = educationIcon;
        break;
      case "Cleaning":
        industry = cleaningIcon;
        break;
      case "Gardening":
        industry = cleaningIcon;
        break;
      case "Other":
        industry = cleaningIcon;
        break;
      default:
        industry = constructionIcon;
    }
    return (
      <div
        key={idx}
        style={{
          margin: "0 auto",
          padding: "10px",
          gap: "30px",
          marginBottom: "20px",
        }}
        className="card-wrapper"
      >
        <div className="card-wrapper-container" to={`/job/${elem.id}`}>
          <div className="image-container">
            <div
              style={{
                marginLeft: "5px",
                width: "90px",
                height: "90px",
                backgroundColor: "#FFCC00",
                borderRadius: "7px",
                backgroundImage: `url(
                                  ${industry}
                                )`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="card-wrapper-info">
            <div className="card-wrapper-info-top">
              <div className="card-wrapper-info-top-header">
                <div>
                  <h2 style={{ paddingLeft: "0" }} className="position">
                    {elem.position}
                  </h2>
                </div>
                <div className="hourly-rate">
                  <h3 className="compensation">${elem.compensation}</h3>
                  <span className="per-hour">/Hour</span>
                </div>
              </div>
              <div className="card-wrapper-info-top-lower">
                <div>
                  {" "}
                  <h4 className="company-jobsmap">{elem.company}</h4>{" "}
                </div>
                <div className="location-wrapper-jobsmap">
                  <img
                    alt={`location-${elem.city}`}
                    className="img-jobsmap"
                    src={locationIcon}
                  />
                  <h4 className="location-jobsmap">{elem.city},</h4>
                  <h4 className="location-jobsmap">{elem.state}</h4>
                </div>
              </div>
            </div>
            <div className="card-wrapper-info-bottom">
              <div className="card-wrapper-info-bottom">
                <div className="card-wrapper-info-bottom-left">
                  <div className="btn-group-jobsmap">
                    <Link to={`/job/${elem.id}`}>
                      <button className="details-btn">details</button>
                    </Link>
                    <button className="email-btn">
                      {" "}
                      <img alt="message-icon" src={messageIcon} />
                    </button>
                  </div>
                  <div onClick={(e) => handleDelete(elem.id)}>
                    <span className="saved-unfilled-wrapper">
                      {" "}
                      <img
                        alt="swipe-icon"
                        className="save-btn-swipe-section"
                        src={savedfilled}
                      />
                    </span>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="card-wrapper-info-left"></div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div style={{ paddingTop: "75px" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>Saved Jobs</h1>
      {favJobs.length > 0 ? mappedData : <Loading />}
    </div>
  );
};

export default Favorites;
