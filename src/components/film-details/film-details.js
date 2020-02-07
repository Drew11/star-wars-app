import React, {useState,useEffect} from 'react';
import Detail from '../detail/detail'
import Spinner from '../spinner/spinner'
import SwapiService from '../../services/swapi-service';

import './film-details.css'

const FilmDetails = ({film, toggleDetails})=>{

    const swapiService = new SwapiService();
    const titlesProps = Object.keys(film);
    const [filmProps, setFilmsProps] = useState(null);
    const [detailStatus, setDetailStatus] = useState(null);



    useEffect(()=>{
        async function fetch() {
            const obj = {};
            for (let k in film) {
                if (typeof film[k] === 'object') {
                    const res = await swapiService.getAllQuery(film[k]);
                    obj[k] = res;
                }
            }
            setFilmsProps(obj);
        }
        fetch();
    },[detailStatus]);

    const getStatusDetail = (status)=> {
        setDetailStatus(status);
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
        <div className="film-details">

            <div className="card text-white bg-secondary mb-3" >
                <div className="card-header">
                    <button type="button"
                            className="btn btn-primary btn-sm"
                            onClick={toggleDetails}
                    >
                        Hide Details
                    </button>
                </div>

                <img src={`./img/ep-${film.episode_id}.jpg`} className="poster" />

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