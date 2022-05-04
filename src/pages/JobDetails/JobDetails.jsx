import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function JobDetails({ jobs }) {
  const { id } = useParams();

  
  
  
  const filteredJob = jobs.filter((elem, idx) => elem.id === id);

  
  const mappedFilteredJob = filteredJob.map((elem, idx) => {
      
      const handleClick = () => {
        window.open(`${elem.url}`);
      };

    const url = elem.url
    return (
      <div key={`job-detail-${idx}`}>
        <h3>{elem.company}</h3>
        <h3>{elem.position}</h3>
        <h3>{elem.location}</h3>
        <h3>{elem.description}</h3>
        <button onClick={handleClick}>Apply now</button>

        {/* <Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open(makeHref({url}));}} >Apply</Link> */}
      </div>
    );
  });

  return (
    <>
      {mappedFilteredJob}
      
      <button id="favorite">Favorite</button>
      <Link to="/">Back</Link>
    </>
  );
}

export default JobDetails;
