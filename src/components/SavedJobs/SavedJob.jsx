import './savedjobs.css'

function SavedJob(props) {
    return ( 
        <div className="savedjobsPage">
            <img src="" alt="" width="" height="" className="">insert image</img>
            <div className="card-body">
                <h2 className="card-text">{props.job.id}</h2>
                <p className="card-text">
                    add job text links here
                </p>
            </div>
        
        <button>Save</button>
        </div>
    );
}

export default SavedJob;