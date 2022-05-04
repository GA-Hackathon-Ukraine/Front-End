
import './SearchForm.css';
import locationIcon from './locationicon.png'
import searchIcon from './searchicon.png'

function SearchForm({setLocation, search, setSearch, position, setPosition }) {

    const handleChange = (e) => {
        setPosition(e.target.value)   
    }

  const handleSetLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="searchContainer">
      <form>
        <div className='searchContainerLocation'>
        <img src={searchIcon}/>
        
          <input className='searchInput' type="text" onChange={handleChange} value={position}/>
        </div>
        <div className='searchContainerSearch'>
        <img src={locationIcon}/>
          <select className='locationInput' onChange={handleSetLocation} type="text">
            <option value="none" selected disabled hidden>
              Please Select
            </option>
            <option>Tacoma</option>
            <option>Seattle</option>
          </select>
        </div>
      </form>
    </div>
  );

}

export default SearchForm;
