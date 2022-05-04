function SearchForm({setLocation, search, setSearch, getFilteredVillagers }) {

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSetLocation=(e)=>{
        setLocation(e.target.value)
    }
    return ( 
        <>
        <form onSubmit={getFilteredVillagers}>
            <label>Location:</label>
            <select onChange={handleSetLocation} type="text">
                <option value="none" selected disabled hidden>Please Select</option>
                <option >Tacoma</option>
                <option >Seattle</option>
            </select>
            <br/>
            <label>Filter by job title/Company:</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={search}
                ></input>
        </form>
        </>
     );
}

export default SearchForm;