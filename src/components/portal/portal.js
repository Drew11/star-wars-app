import React from 'react';
import ReactDOM from 'react-dom';
import {bootWatchStyle, portalStyle} from './bootwatch-darky'

class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.containerEl = document.createElement('div');
        this.containerEl.classList.add('portal');
        this.externalWindow = null;
    }

    componentDidMount() {
        this.externalWindow = window.open('', '', 'width=362,height=362,left=200,top=200');
        this.externalWindow.document.body.appendChild(this.containerEl);
        const style = document.createElement('style');
        const styleText = document.createTextNode(bootWatchStyle+portalStyle);
        style.setAttribute('rel','stylesheet');
        style.appendChild(styleText);
        this.externalWindow.document.head.appendChild(style);
    }

    componentWillUnmount() {
        this.externalWindow.close();
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.containerEl);
    }
}

export default Portal;