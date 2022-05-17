import './ListCareers.styles.css'
import caretaking from '../../../src/caretaking.svg'
import cleaning from '../../../src/cleaning.svg'
import construction from '../../../src/construction.svg'
import transportation from '../../../src/transportation.svg'

import gardening from '../../../src/gardening.svg'
import technology from '../../../src/technology.svg'
import education from '../../../src/education.svg'
import food from '../../../src/food.svg'
import ListCareersNew from './ListCareersNew'


const ListCareers = () => {
  return (
    <>
      <div className="listcareers-wrapper">
        <h2 className='section-title search-by-industry'>Search by Industry</h2>

        <div className="wrapper-for-industry">
          <div><img className='icons-search-indstry' src={construction} /></div>
          <div><img className='icons-search-indstry' src={transportation} /></div>
        </div>
        <div className="wrapper-for-industry space-above">
          <div><img className='icons-search-indstry' src={cleaning} /></div>
          <div><img className='icons-search-indstry' src={caretaking} /></div>
        </div>
        <div className="wrapper-for-industry space-above">
          <div><img className='icons-search-indstry' src={gardening} /></div>
          <div><img className='icons-search-indstry' src={technology} /></div>
        </div>
        <div className="wrapper-for-industry space-above">
          <div><img className='icons-search-indstry' src={education} /></div>
          <div><img className='icons-search-indstry' src={food} /></div>
        </div>
      </div>
    </>
  )
}

export default ListCareers