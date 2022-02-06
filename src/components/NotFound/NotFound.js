import React from 'react';
import notFound from '../../images/notf.png';
import './NotFound.css';


const NotFound = () => {

    return (
        <div className='not-found-container'>
            <img src={notFound} alt=""/>
        </div>
    );
};

export default NotFound;