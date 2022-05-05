
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
          <select defaultValue={'DEFAULT'} className='locationInput' onChange={handleSetLocation} type="text">
            <option value="DEFAULT" disabled hidden>
              Please Select
            </option>
            <option  value='1'>Tacoma</option>
            <option  value="2">Seattle</option>
          </select>
        </div>
      </form>
    </div>
  );

}

export default SearchForm;
