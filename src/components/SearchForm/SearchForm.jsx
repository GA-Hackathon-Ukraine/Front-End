function SearchForm() {
    return ( 
        <>
        <form>
            <label>Location:</label>
            <select type="text">
                <option>Tacoma</option>
                <option>Seattle</option>
            </select>
            <br/>
            <label>Filter by job title/Company:</label>
            <input type="text"></input>
        </form>
        </>
     );
}

export default SearchForm;