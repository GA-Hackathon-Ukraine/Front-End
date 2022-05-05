import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import SearchForm from '../../components/SearchForm/SearchForm'
import JobsMap from '../../components/JobsMap/JobsMap'
import ListCareers from '../../components/ListCareers/ListCareers'
import SwipeSection from '../../components/SwipeSection/SwipeSection'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Landing = ({ user, jobs, setJobs }) => {

  const [compomentShow, setComponentShow] = useState(false)
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


  const getFilteredLocation = () => {
    let searchTerm = location.toLowerCase()
    return jobs.filter(v => {
			let lowerCaseName = v.city.toLowerCase()
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
  
  const filteredPosition1 = getFilteredPosition()
  const filteredLocation1 = getFilteredLocation()
  // const filteredPosition1 = getFilteredPosition()
  // const arr = [...filteredJobs1, ...filteredLocation1]
  // const doubleFiltered = [...new Set([...filteredJobs1, ...filteredLocation1])]
 

  const combinedFilteredSearch = [];

  filteredPosition1.forEach((job) => {
    if (filteredLocation1.includes(job)) {
      combinedFilteredSearch.push(job)
    }
  })

  return (
    // <main className={styles.container}><br />
    //   {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
    //   <SearchForm setLocation={setLocation} setSearch={setSearch} search={search} position={position} setPosition={setPosition}/>
    //   <JobsMap newJobs={combinedFilteredSearch}/>
    //   <br />
    //   <br />

    <main className={styles.container}>
      <SearchForm setLocation={setLocation} setSearch={setSearch} search={search} position={position} setPosition={setPosition} setComponentShow={setComponentShow} compomentShow={compomentShow}/>
      
      { compomentShow ? <JobsMap allJobs={combinedFilteredSearch}/> :  <span style={{width: "100vw"}}> <SwipeSection /> <ListCareers /> </span> }
      

    </main>
  )
}

export default Landing