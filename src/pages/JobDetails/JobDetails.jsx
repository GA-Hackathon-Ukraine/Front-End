import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function JobDetails({jobs}) {


    const {id} = useParams()

    const filteredJob = jobs.filter((elem,idx)=>elem.id === id)

    console.log(filteredJob) // job id

    const mappedFilteredJob = filteredJob.map((elem,idx)=>{

        return(
            <div key={`job-detail-${idx}`}>
                <h3>{elem.company}</h3>
                <h3>{elem.position}</h3>
                <h3>{elem.location}</h3>
                <h3>{elem.description}</h3>
            </div>
        )
    })


    return ( 
        <>
        {mappedFilteredJob}
        <Link to="/">Back</Link>
        </>
     );
}

export default JobDetails;