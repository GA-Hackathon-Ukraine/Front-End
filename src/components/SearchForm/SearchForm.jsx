function SearchForm({ search, setSearch, getFilteredVillagers }) {

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return ( 
        <>
        <form onSubmit={getFilteredVillagers}>
            <label>Location:</label>
            <select type="text">
                <option>Tacoma</option>
                <option>Seattle</option>
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