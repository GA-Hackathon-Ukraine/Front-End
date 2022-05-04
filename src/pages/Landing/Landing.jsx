import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import SearchForm from '../../components/SearchForm/SearchForm'
import JobsMap from '../../components/JobsMap/JobsMap'
import { useState } from 'react'

const Landing = ({ user, jobs, setJobs }) => {

  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")

  let filteredJobs = jobs.filter(job => job.position.toLowerCase().trim().includes(search.toLowerCase().trim()))

    
  const listJobs = filteredJobs.map((element, idx) => {
    return (      
        <div key={`part-id-${idx}`}>      
        <Link to=''  key={`${element.name}-part-${idx}`}>{element.name}</Link>
      </div>
    );
  });

  const getFilteredJobs = (e) => {
    let searchTerm = search.toLowerCase()
    return jobs.filter(v => {
			let lowerCaseName = v.company.toLowerCase()
      return lowerCaseName.includes(searchTerm)
    })
  }
  const getFilteredLocation = (e) => {
    let searchTerm = location.toLowerCase()
    return jobs.filter(v => {
			let lowerCaseName = v.location.toLowerCase()
      return lowerCaseName.includes(searchTerm)
    })
  }


  
  console.log(getFilteredJobs(), getFilteredLocation())
  
  const filteredJobs1 = getFilteredJobs()
  const filteredLocation1 = getFilteredLocation()
  const arr = [...filteredJobs1, ...filteredLocation1]
  const doubleFiltered = [...new Set([...filteredJobs1, ...filteredLocation1])]
  
  // console.log('search', search)
  // console.log('location', location)
  // const daa = doubleFiltered.includes(r => r.company === search && r.location === location)

  // const func = doubleFiltered.forEach((item) => {
  //   let sime = []
  //   if (item.location === location && item.company === search) {
  //     sime.push(item)
  //   } 
  //   return item
  // })

  // const f = doubleFiltered.forEach((r) => console.log(r))
  // console.log(func)
  // console.log(doubleFiltered)




  

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <SearchForm setLocation={setLocation} setSearch={setSearch} search={search}/>
      <JobsMap newJobs={filteredLocation1}/>
      
    </main>
  )
}

export default Landing


// let filteredParties = currentParties.filter(party => party.partyName.toLowerCase().trim().includes(search.toLowerCase().trim()))