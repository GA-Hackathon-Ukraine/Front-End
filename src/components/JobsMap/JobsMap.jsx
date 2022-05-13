// import dummydata from './dummydata';
import { Link } from 'react-router-dom';
import './JobsMap.styles.css';
import locationIcon from '../../../src/location.svg';
import messageIcon from '../../../src/message.svg';
import savedUnfilled from '../../../src/saved-unfilled.svg';
import constructionIcon from '../../../src/construction.svg';
import technologyIcon from '../../../src/technology.svg';
import foodandbeveragesIcon from '../../../src/food.svg'
import transportationIcon from '../../../src/transportation.svg'
import caretakingIcon from '../../../src/caretaking.svg'
import educationIcon from '../../../src/education.svg'
import cleaningIcon from '../../../src/cleaning.svg'
import { supabase } from '../../utils/supabaseClient';
import { useEffect, useState } from 'react';
import JobsMapCard from '../JobsMapCard/JobsMapCard';
import JobsNumber from '../JobsNumber/JobsNumber';



const JobsMap = ({combinedFilteredSearch, allJobs}) => {

  const mappedData = combinedFilteredSearch.map((elem, idx) => {

    console.log(combinedFilteredSearch.length)

    let industry;
    // This needs ot be refactored later. adding new images .. etc.
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
      <JobsMapCard elem={elem} locationImg={locationIcon} industry={industry} />
    );
  });

  return (
    <>
      <JobsNumber combinedFilteredSearch={combinedFilteredSearch} />
      {mappedData}
    </>);
};

export default JobsMap;
