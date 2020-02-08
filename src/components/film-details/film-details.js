import React, {useState,useEffect, useLayoutEffect} from 'react';
import Detail from '../detail/detail'
import Spinner from '../spinner/spinner'
import SwapiService from '../../services/swapi-service';

import './film-details.css'

const FilmDetails = ({film, toggleDetails, posterSrc })=>{


    const swapiService = new SwapiService();
    const titlesProps = Object.keys(film);
    const [filmProps, setFilmsProps] = useState(null);
    const [currentDetail, setDetail] = useState(null);
    const [coverSrc, setCover] = useState(null);

    const fetch = async () => {
        const obj = {};
        for (let k in film) {
            if (typeof film[k] === 'object') {
                const res = await swapiService.getAllQuery(film[k]);
                obj[k] = res;
            }
        }
        setFilmsProps(obj);

        if(film.hasOwnProperty('episode_id')) {
            setCover(`./img/ep-${film.episode_id}.jpg`);
        } else {
            setCover(posterSrc);
        }
    };

    useEffect(()=>{
        fetch();
    },[]);

    const getStatusDetail = ({detail, imageSrc}) => {
        setDetail(detail);
        setCover(imageSrc)
    };

    const filmDetails = filmProps?titlesProps.map((detail, index)=> {

                if (typeof film[detail] === 'object') {
                    return  <ul className="list-group"
                                key={index}
                    >
                        {detail}
                        {film[detail].map((item, i) =>
                            <Detail
                                key={i}
                                detail={filmProps[detail][i]}
                                detailName={detail}
                                getStatusDetail={getStatusDetail}
                            />)
                        }
                    </ul>

                }
                return<li className="list-group-item"
                          key={index}
                >
                    {detail}
                    <p>
                        {film[detail]}
                    </p>
                </li>
            }):
    <Spinner/>;

    return (
        currentDetail?<FilmDetails
            film={currentDetail}
            toggleDetails={toggleDetails}
            posterSrc={coverSrc}
        /> : <div className="film-details">

            <div className="card text-white bg-secondary mb-3" >
                <div className="card-header">
                    <button type="button"
                            className="btn btn-primary btn-sm"
                            onClick={toggleDetails}
                    >
                        Hide Details
                    </button>
                </div>

                <img src={coverSrc} className="poster" />

                <div className="card-body">

                    <ul className="list-group">
                        {filmDetails}
                    </ul>

                </div>

            </div>
        </div>
    )
};

export default FilmDetails;