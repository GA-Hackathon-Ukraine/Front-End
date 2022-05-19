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
import JobsMapCard from "../../components/JobsMapCard/JobsMapCard";

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

      <>
          <JobsMapCard key={`key-new-${idx}`} elem={elem} locationImg={locationIcon} industry={industry} handleDelete={handleDelete} showFave={true} />
      </>
    );
  });

  return (
    <div style={{ paddingTop: "90px" }}>
      <h1 className="titleee" style={{ textAlign: "center", color: "black" }}>Saved Jobs</h1>
      {favJobs.length > 0 ? <div className='wrapper-jobs-map-grid'> {mappedData}
        </div>  : <Loading />}
    </div>
  );
};

export default Favorites;
