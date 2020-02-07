import React, {useState} from 'react';
import SwapiService from '../../services/swapi-service';
import Portal from '../portal/portal';
import PortalView from '../portal/portal-view';

import './detail.css'

const Detail =({detail, detailName, getStatusDetail})=>{
        const swapiService = new SwapiService();
        const id = swapiService.getId(detail);
        const imageSrc = `https://starwars-visualguide.com/assets/img/${detailName}/${id}.jpg`;
        const [portalOpen, setPortalState] = useState(false);

    const togglePortal = event => {
        setPortalState(!portalOpen);
        event.preventDefault();
    };

    const closeWindowPortal = () => {
        setPortalState(false);
    };
    getStatusDetail(portalOpen);
        return (
            <li
                className="list-group-item"
            >
                <div id="portal">
                </div>

                <div className="hero">
                    <img src={imageSrc} alt=""/>
                </div>

                <a href={detail}
                   onClick={togglePortal}
                >
                        <span>
                            {detail.name}
                        </span>
                </a>

                {portalOpen && (
                    <Portal>
                        <span>{detail.name}
                        </span>
                        <PortalView
                            detail={detail}
                            closeWindowPortal={closeWindowPortal}
                        />
                    </Portal>
        )}
            </li>
    )

};

export default Detail;