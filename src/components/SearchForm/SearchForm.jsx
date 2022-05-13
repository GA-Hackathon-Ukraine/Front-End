
import './SearchForm.css';
import locationIcon from './locationicon.png'
import searchIcon from './searchicon.png'

function SearchForm({setLocation, position, setPosition, setSearchShow}) {

    const handleChange = (e) => {
        setPosition(e.target.value)   
    }

  const handleSetLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleClickRender = () => {
    setSearchShow(true)
  }
    
  return (
    <div className="searchContainer">
      <form className='searchContainer-form' onClick={handleClickRender}>
        <div className='searchContainerLocation'>
        <img className='searchContainer-searchIcon' src={searchIcon}/>
        
          <input className='searchInput' placeholder="Search" type="text" onChange={handleChange} value={position}/>
        </div>
        <div className='searchContainerSearch'>
        <img className='searchContainer-locationIcon' src={locationIcon}/>
          <select defaultValue={'DEFAULT'} className='locationInput' onChange={handleSetLocation} type="text">
            <option value="DEFAULT" disabled hidden>
              Choose Location
            </option>
            <option>Tacoma</option>
            <option>Seattle</option>
            <option>Olympia</option>
            <option>Vancouver</option>
            <option>Bellevue</option>
            <option>Kent</option>
            <option>Federal Way</option>
            <option>Auburn</option>
            <option>Lakewood</option>
            <option>Gig Harbor</option>
            <option>Remote</option>
          </select>
        </div>
      </form>
    </div>
  );

}

export default SearchForm;
