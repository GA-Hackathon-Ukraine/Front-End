import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import SearchForm from '../../components/SearchForm/SearchForm'
import JobsMap from '../../components/JobsMap/JobsMap'
import { useState } from 'react'

const Landing = ({ user, jobs, setJobs }) => {

  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")
  const [position, setPosition] = useState("")

  let filteredJobs = jobs.filter(job => job.position.toLowerCase().trim().includes(search.toLowerCase().trim()))

    
  const listJobs = filteredJobs.map((element, idx) => {
    return (      
        <div key={`part-id-${idx}`}>      
        <Link to=''  key={`${element.name}-part-${idx}`}>{element.name}</Link>
      </div>
    );
  });

  const getFilteredJobs = () => {
    let searchTerm = search.toLowerCase()
    return jobs.filter(v => {
			let lowerCaseName = v.company.toLowerCase()
      return lowerCaseName.includes(searchTerm)
    })
  }
  const getFilteredLocation = () => {
    let searchTerm = location.toLowerCase()
    return jobs.filter(v => {
			let lowerCaseName = v.location.toLowerCase()
      return lowerCaseName.includes(searchTerm)
    })
  }

  const getFilteredPosition = () => {
    let searchTerm = position.toLowerCase()
    return jobs.filter(v => {
			let lowerCaseName = v.position.toLowerCase()
      return lowerCaseName.includes(searchTerm)
    })
  }
  
  const filteredJobs1 = getFilteredJobs()
  const filteredLocation1 = getFilteredLocation()
  // const filteredPosition1 = getFilteredPosition()
  // const arr = [...filteredJobs1, ...filteredLocation1]
  // const doubleFiltered = [...new Set([...filteredJobs1, ...filteredLocation1])]
 

  const combinedFilteredSearch = [];

  filteredJobs1.forEach((job) => {
    if (filteredLocation1.includes(job)) {
      combinedFilteredSearch.push(job)
    }
  })

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <SearchForm setLocation={setLocation} setSearch={setSearch} search={search} position={position} setPosition={setPosition}/>
      <JobsMap newJobs={combinedFilteredSearch}/>
      
    </main>
  )
}

export default Landing


// let filteredParties = currentParties.filter(party => party.partyName.toLowerCase().trim().includes(search.toLowerCase().trim()))