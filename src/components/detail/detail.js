import React, {useState} from 'react';
import SwapiService from '../../services/swapi-service';

import './detail.css'

const Detail = ({detail, detailName, getStatusDetail}) => {

    if((detailName === 'people') || (detailName === 'pilots')){
        detailName='characters'
    }
        const swapiService = new SwapiService();
        const id = swapiService.getId(detail);
        const imageSrc = `https://starwars-visualguide.com/assets/img/${detailName}/${id}.jpg`;
        const [portalOpen, setPortalState] = useState(false);

    const togglePortal = event => {
        setPortalState(!portalOpen);
        event.preventDefault();
    };

    if(portalOpen) {
        getStatusDetail({detail, imageSrc});
    }
        return (
            <li
                className="list-group-item"
            >

                <div className="hero">
                    <img src={detailName ==='films'?`./img/ep-${detail.episode_id}.jpg`: imageSrc} alt=""/>
                </div>

                <a href={detail}
                   onClick={togglePortal}
                >
                        <span>
                            {detailName === 'films'? detail.title: detail.name}
                        </span>
                </a>
            </li>
    )

};

export default Detail;