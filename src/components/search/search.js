import React, {useState} from 'react';
import './search.css'

const Search = ({setSearchQuery, searchQuery}) => {

    const [query, setQuery] = useState(searchQuery);

    const setNewQuery = (event) => {
        const query = event.target.value;
        setQuery(query);
    };

    const sendQuery = (event) => {
        event.preventDefault();
        setSearchQuery(query.trim());
    };

    return (
        <div className="search">
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={setNewQuery}
                        />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit"
                                    onClick={sendQuery}
                            >Search</button>
                    </form>
        </div>
    )
};

export default Search;