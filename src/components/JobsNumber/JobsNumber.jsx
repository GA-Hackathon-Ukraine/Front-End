import './JobsNumber.styles.css'

const JobsNumber = ({ combinedFilteredSearch }) => {
  return (
    <>
      <div className="jobs-number-section-title">
        <h2 className="jobs-number-section-title-new">{combinedFilteredSearch.length} Jobs</h2>
      </div>
    </>
  )
}

export default JobsNumber