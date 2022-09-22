import "./SearchForm.css";
import locationIcon from "./locationicon.png";
import searchIcon from "./searchicon.png";
import { useMediaQueryHook } from "../utils/useMediaQuery";

function SearchForm({ setLocation, position, setPosition, setSearchShow }) {
  const handleChange = (e) => {
    setPosition(e.target.value);
  };

  const isBreakPoint = useMediaQueryHook(934)

  const handleSetLocation = (e) => {
    if (e.target.value === "All") {
      setLocation("");
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
          <img className="searchContainer-searchIcon" src={searchIcon} />

          <input
            className="searchInput"
            placeholder="Search"
            type="text"
            onChange={handleChange}
            value={position}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div className="searchContainerSearch">
            <img
              className="searchContainer-locationIcon"
              src={locationIcon}
              alt="location icon"
            />
            <select
              defaultValue={"DEFAULT"}
              className= {isBreakPoint ? "locationInputMobile" : "locationInput" }
              onChange={handleSetLocation}
              type="text"
              style={{ color: "grey" }}
            >
              <option value="DEFAULT" disabled hidden>
                {isBreakPoint ? "Location" : "Choose Location"}
              </option>
              <option>All</option>
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
          <div className="searchContainerSearch">
            <img
              className="searchContainer-locationIcon"
              src={locationIcon}
              alt="location"
            />
            <select
              defaultValue={"DEFAULT"}
              className= {isBreakPoint ? "locationInputMobile" : "locationInput" }
              onChange={""}
              type="text"
              style={{ color: "grey" }}
            >
              <option className="smallerFont" value="DEFAULT" disabled hidden>
              {isBreakPoint ? "Industry" : "Choose Industry"}
              </option>
              <option >All</option>
              <option>Construction</option>
              <option>Technology</option>
              <option>Food</option>
              <option>Transportation</option>
              <option>Caretaking</option>
              <option>Education</option>
              <option>Cleaning</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
