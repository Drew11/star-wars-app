import React from 'react';
import './portal-view.css'

const PortalView = ({detail, closeWindowPortal}) => {

    const list = Object.keys(detail).map((k, i)=>{
        if(typeof detail[k] === 'object'|| k==='name'){
            return;
        }
        const propName = k.replace(/_/gi,' ');

        return <li
            key={i}
            className="list-group-item-secondary"
        >
            <span className="prop-name">{propName}</span>
            {`: ${detail[k]}`}
        </li>
    });

    return (
        <ul className="list-group">
            {list}
            <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={closeWindowPortal}
            >
                Close
            </button>
        </ul>
    )
};

export default PortalView;