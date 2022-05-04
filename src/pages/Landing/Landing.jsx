import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import SearchForm from '../../components/SearchForm/SearchForm'
import JobsMap from '../../components/JobsMap/JobsMap'
import { useState } from 'react'

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

  console.log('ad', jobs)
  
  const getJobs=()=>{
    console.log(filteredJobs)
  }

  console.log(filteredJobs)


  const getFilteredJobs = (e) => {
    let searchTerm = search.toLowerCase()
    return jobs.filter(v => {
			let lowerCaseName = v.company.toLowerCase()
      return lowerCaseName.includes(searchTerm)
    })
  }

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <a target="_blank" href="google.ca">go to google</a>
      <SearchForm  setSearch={setSearch} search={search}/>
      <JobsMap newJobs={getFilteredJobs()}/>
      
    </main>
  )
}

export default Landing


// let filteredParties = currentParties.filter(party => party.partyName.toLowerCase().trim().includes(search.toLowerCase().trim()))