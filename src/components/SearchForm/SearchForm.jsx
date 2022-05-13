
import './SearchForm.css';
import locationIcon from './locationicon.png'
import searchIcon from './searchicon.png'

function SearchForm({setLocation, position, setPosition, setSearchShow}) {

  const handleChange = (e) => {
    setPosition(e.target.value)   
  }

  const handleSetLocation = (e) => {
    if (e.target.value === "All") {
      setLocation('')
    } else {
      setLocation(e.target.value);
    }
  };

  const handleClickRender = () => {
    setSearchShow(true);
  };

  return (
    <div className="searchContainer">
      <form className="searchContainer-form" onClick={handleClickRender}>
        <div className="searchContainerLocation">
          <img className="searchContainer-searchIcon" src={searchIcon} alt=""/>

          <input
            className="searchInput"
            placeholder="Search"
            type="text"
            onChange={handleChange}
            value={position}
          />
        </div>
        <div className="searchContainerSearch">
          <img className="searchContainer-locationIcon" src={locationIcon} alt="" />
          <select
            defaultValue={"DEFAULT"}
            className="locationInput"
            onChange={handleSetLocation}
            type="text"
            style={{ color: "grey" }}
          >
            <option value="DEFAULT" disabled hidden>
              Choose Location
            </option>
            <option>All</option>
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
