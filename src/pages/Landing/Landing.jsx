import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import SearchForm from '../../components/SearchForm/SearchForm'
import JobsMap from '../../components/JobsMap/JobsMap'


const Landing = ({ user }) => {

  


  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <SearchForm/>
      <JobsMap/>
      {/* form component */}
      {/* jobs map */}
    </main>
  )
}

export default Landing
