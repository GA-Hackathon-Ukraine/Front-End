import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import SearchForm from '../../components/SearchForm/SearchForm'
import JobsMap from '../../components/JobsMap/JobsMap'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.production.min'

const Landing = ({ user, jobs, setJobs }) => {

  const [search, setSearch] = useState("")

  let filteredJobs = jobs.filter(job => job.position.toLowerCase().trim().includes(search.toLowerCase().trim()))

    
  const listJobs = filteredJobs.map((element, idx) => {
    return (      
        <div key={`part-id-${idx}`}>      
        <Link to=''  key={`${element.name}-part-${idx}`}>{element.name}</Link>
      </div>
    );
  });


  
  const getJobs=()=>{
    console.log(filteredJobs)
  }

  console.log(filteredJobs)

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <a target="_blank" href="google.ca">go to google</a>
      <SearchForm/>
      <JobsMap/>
      {listJobs}
      {/* form component */}
      {/* jobs map */}
    </main>
  )
}

export default Landing


// let filteredParties = currentParties.filter(party => party.partyName.toLowerCase().trim().includes(search.toLowerCase().trim()))