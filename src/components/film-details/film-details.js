import React, {useState,useEffect} from 'react';
import Spinner from '../spinner/spinner'
import SwapiService from '../../services/swapi-service';

import './film-details.css'

const FilmDetails = ({film, toggleDetails})=>{

    const titlesProps = Object.keys(film);
    const [filmProps, setFilmsProps] = useState(null);
    const swapiService = new SwapiService();

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
    },[]);

    const details = filmProps?titlesProps.map((detail, index)=> {
                    const idRegExp = /\/([0-9]*)\/$/;
                if (typeof film[detail] === 'object') {

                    return  <ul className="list-group"
                                key={index}
                    >
                        {detail}
                        {film[detail].map((item, i) =>{

                           const index = filmProps[detail][i].url.match(idRegExp)[1];

                            return <li
                                key={i}
                                className="list-group-item">
                                <div className ="hero">
                                    <img src={`https://starwars-visualguide.com/assets/img/${detail}/${index}.jpg`} alt=""/>
                                </div>

                                <a href={item}>
                                            <span>
                                                {filmProps[detail][i].name}
                                            </span>
                                </a>
                            </li>
                        })}
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
            }):<Spinner/>;


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
                        {details}
                    </ul>

                </div>

            </div>
        </div>
    )
};

export default FilmDetails;