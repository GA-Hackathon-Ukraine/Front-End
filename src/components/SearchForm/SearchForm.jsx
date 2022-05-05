
import './SearchForm.css';
import locationIcon from './locationicon.png'
import searchIcon from './searchicon.png'

function SearchForm({setLocation, position, setPosition, setComponentShow, compomentShow}) {

    const handleChange = (e) => {
        setPosition(e.target.value)   
    }

  const handleSetLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleClickRender = () => {
    setComponentShow(true)
  }
    
  return (
    <div className="searchContainer">
      <form onClick={handleClickRender}>
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
            

          </select>
        </div>
      </form>
    </div>
  );

}

export default SearchForm;
