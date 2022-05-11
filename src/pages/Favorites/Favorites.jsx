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

import { useAuth } from "../../utils/auth";
import { useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
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
    }

    // data.forEach(async (job, idx) => {
    //   console.log(job.job_id);
    //   const { data, error } = await supabase
    //     .from("Jobs")
    //     .select()
    //     .match({ id: job.job_id });
    //   favoritedJobs.push(data[0]);
    //   console.log(data);
    // });
    setFavJobs(favoritedJobs);
    console.log(favJobs);
  };

  useEffect(() => {
    getFavorites();
  }, []);

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
        <Link
          className="card-wrapper-container"
          key={`job-${idx}`}
          to={`/job/${elem.id}`}
        >
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
                  <img className="img-jobsmap" src={locationIcon} />
                  <h4 className="location-jobsmap">{elem.city},</h4>
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
                      {" "}
                      <img src={messageIcon} />
                    </button>
                  </div>
                  <div>
                    <span className="saved-unfilled-wrapper">
                      {" "}
                      <img
                        className="save-btn-swipe-section"
                        src={savedfilled}
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

  return (
    <div style={{ paddingTop: "75px" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>Saved Jobs</h1>
      {favJobs.length > 0 ? mappedData : <Loading />}
      {/* {msg ? <h1>{msg}</h1> : <></>} */}
      {/* {favJobs.length > 0 && !msg ? mappedData : <Loading />} */}
    </div>
  );
};

export default Favorites;
