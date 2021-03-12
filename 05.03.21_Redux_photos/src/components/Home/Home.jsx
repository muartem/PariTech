import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getPhotos, reset} from "../../redux/actions";
import Photo from "../Photo/Photo";

import s from './Home.module.css'
import 'skeleton-screen-css'

const Home = ({albumId}) => {
    const dispatch = useDispatch()

    const photos = useSelector(state => state.api.photos)
    const loader = useSelector(state => state.loader.isLoading)

    useEffect(() => {
        dispatch(getPhotos(null, albumId))
        return () => dispatch(reset())
    }, [])


    return (
        <div className={s.home} >
            <div className={s.gallery }>
                {photos.map(p => (
                    <Link to={`/photos/${p.id}`} key={p.id}>
                        <Photo url={p.thumbnailUrl} title={p.title} />
                    </Link>
                ))}
                {loader && [<a href="#" key={991} className="ssc-square"/>,
                    <a href="#" key={992}  className="ssc-square"/>,
                    <a href="#" key={993}  className="ssc-square"/>,
                    <a href="#" key={994}  className="ssc-square"/>,
                    <a href="#" key={995}   className="ssc-square"/>,
                    <a href="#" key={996} className="ssc-square"/>]}
            </div>
            {!loader && <div
                className={s.loadMore}
                onClick={() => dispatch(getPhotos(photos?.length, albumId))}
            > Load more...</div>}
        </div>
    )
}

Home.propTypes = {
    albumId: PropTypes.string
}

export default Home
