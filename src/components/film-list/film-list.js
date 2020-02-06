import React, {Fragment, useState} from 'react';
import FilmDetails from '../film-details/film-details'
import Spinner from '../spinner/spinner'

const FilmList = ({visibleFilms})=>{

    const list = visibleFilms ? visibleFilms.map(film=>
        <ViewFilm
            key={film.episode_id}
            film={film}
        />
    ): <Spinner/>;


    return (
        <div className="film-list">

            <ul className="list-group">
                {list}
            </ul>
        </div>
    )
};

const ViewFilm =({film})=>{

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    };

    const details = showDetails?

        <FilmDetails
            film={film}
            toggleDetails={toggleDetails}
        />
        :<Fragment>
                <span>
                    {film.title}
                </span>

            <button
                type="button"
                className="btn btn-outline-warning btn-sm"
                onClick={toggleDetails}
            >
                Show Details
            </button>
        </Fragment>;


    return (
        <li className ="list-group-item
                        d-flex
                        justify-content-between
                        align-items-center"
        >
            {details}
        </li>
    )
};


export default FilmList;