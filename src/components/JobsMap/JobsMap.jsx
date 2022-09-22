import './JobsMap.styles.css';
import locationIcon from '../../../src/location-red.svg';
import constructionIcon from '../../../src/construction.svg';
import technologyIcon from '../../../src/technology.svg';
import foodandbeveragesIcon from '../../../src/food.svg'
import transportationIcon from '../../../src/transportation.svg'
import caretakingIcon from '../../../src/caretaking.svg'
import educationIcon from '../../../src/education.svg'
import cleaningIcon from '../../../src/cleaning.svg'
import JobsMapCard from '../JobsMapCard/JobsMapCard';
import JobsNumber from '../JobsNumber/JobsNumber';



const JobsMap = ({combinedFilteredSearch}) => {

  const mappedData = combinedFilteredSearch.map((elem, idx) => {
    let industry;
    switch (elem.industry) {
      case 'Technology':
        industry = technologyIcon;
        break;
      case 'Food/Beverages':
        industry = foodandbeveragesIcon;
        break;
      case 'Transportation':
        industry = transportationIcon;
        break;
      case 'Caretaking':
        industry = caretakingIcon;
        break;
      case 'Education':
        industry = educationIcon;
        break;
      case 'Cleaning':
        industry = cleaningIcon;
        break;
      case 'Gardening':
        industry = cleaningIcon;
        break;
      case 'Other':
        industry = cleaningIcon;
        break;
      default:
        industry = constructionIcon;
    }
    return (
      <JobsMapCard key={`key-${idx}`} elem={elem} locationImg={locationIcon} industry={industry} showFave={false}/>
    );
  });

  return (
    <>
      <div className='home-landing-wrapper-block'>
        <JobsNumber combinedFilteredSearch={combinedFilteredSearch} />
        <div className='wrapper-jobs-map-grid'>
          {mappedData}
        </div>
      </div>
    </>);
};

export default JobsMap;
