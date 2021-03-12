import React from 'react';
import PropTypes from 'prop-types';

import s from './Photo.module.css'

const Photo = ({url, title}) => {

    return (
        <div className={s.card}>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

Photo.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
}

export default Photo;
