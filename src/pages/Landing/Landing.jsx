import styles from "./Landing.module.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import JobsMap from "../../components/JobsMap/JobsMap";
import ListCareersNew from "../../components/ListCareers/ListCareersNew";
import SwipeSection from "../../components/SwipeSection/SwipeSection";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

const Landing = ({ searchShow, setSearchShow }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");
  const [allJobs, setAlljobs] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase.from("Jobs").select();
    setAlljobs(data);

    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getFilteredLocation = () => {
    let searchTerm = location.toLowerCase();
    return allJobs.filter((v) => {
      let lowerCaseName = v.city.toLowerCase();
      return lowerCaseName.includes(searchTerm);
    });
  };

  const getFilteredPosition = () => {
    let searchTerm = position.toLowerCase();
    return allJobs.filter((v) => {
      let lowerCaseName = v.position.toLowerCase();
      return lowerCaseName.includes(searchTerm);
    });
  };

  const filteredPosition1 = getFilteredPosition();
  const filteredLocation1 = getFilteredLocation();

  const combinedFilteredSearch = [];

  filteredPosition1.forEach((job) => {
    if (filteredLocation1.includes(job)) {
      combinedFilteredSearch.push(job);
    }
  });

  return (
    <main className={styles.container}>
      <SearchForm
        setLocation={setLocation}
        setSearch={setSearch}
        search={search}
        position={position}
        setPosition={setPosition}
        setSearchShow={setSearchShow}
        searchShow={searchShow}
        allJobs={allJobs}
      />

      {searchShow ? (
        <JobsMap combinedFilteredSearch={combinedFilteredSearch} />
      ) : (
        <span style={{ width: "100vw" }}>
          <SwipeSection /> <ListCareersNew />
        </span>
      )}
    </main>
  );
};

export default Landing;
