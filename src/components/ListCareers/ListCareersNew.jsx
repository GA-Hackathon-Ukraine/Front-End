import './ListCareersNew.styles.css'
import caretaking from '../../../src/caretaking.svg'
import cleaning from '../../../src/cleaning.svg'
import construction from '../../../src/construction.svg'
import transportation from '../../../src/transportation.svg'

import gardening from '../../../src/gardening.svg'
import technology from '../../../src/technology.svg'
import education from '../../../src/education.svg'
import food from '../../../src/food.svg'


const ListCareersNew = () => {
  return (
      <div className="listcareers-wrapper">
        <h2 className='section-title'>Search by Industry</h2>
        <div className='grid-wrapper-careers'>
          <div className='grid-careers'>
            <img className='grid-careers-image' src={construction} />
            <img className='grid-careers-image' src={transportation} />
            <img className='grid-careers-image' src={cleaning} />
            <img className='grid-careers-image' src={caretaking} />
            <img className='grid-careers-image' src={gardening} />
            <img className='grid-careers-image' src={technology} />
            <img className='grid-careers-image' src={education} />
            <img className='grid-careers-image' src={food} />
          </div>
        </div>
      </div>
  )
}

export default ListCareersNew