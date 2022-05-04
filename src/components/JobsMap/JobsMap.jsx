import dummydata from './dummydata'
import { Link } from 'react-router-dom';

function JobsMap({newJobs}) {


    

    const mappedData = newJobs.map((elem,idx)=>{
        return (
            <Link key={`job-${idx}`} to={`/job/${elem.id}`}>
            <div style={{display:"flex", justifyContent: "space-between"}}>
                <h3>{elem.company}</h3>
                <h3>{elem.position}</h3>
                <h3>{elem.location}</h3>
            </div>
            
            </Link>
        )
    })

    return ( 
        <>
        {mappedData}
        </>
     );
}

export default JobsMap;