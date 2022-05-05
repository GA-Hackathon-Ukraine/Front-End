import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profiles = ({user}) => {
  const [profiles, setProfiles] = useState([])

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <div style={{paddingTop: "75px"}}>a
      <h1>Hello {user.name}, your profiles are below.</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile=>
            <p key={profile._id}>{profile.name}</p>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </div>
  )
}
 
export default Profiles