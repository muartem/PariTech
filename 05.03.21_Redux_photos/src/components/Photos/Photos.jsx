import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getPhoto, reset} from "../../redux/actions";

import s from "./Photos.module.css"
import 'skeleton-screen-css'

const Photos = () => {
    const dispatch = useDispatch()

    const photo = useSelector(state => state.api.photo)
    const loader = useSelector(state => state.loader.isLoading)

    const { photoId } = useParams()

    useEffect(() => {
        dispatch(getPhoto(photoId))
        return () => dispatch(reset())
    }, [])

    return (
        <div className={s.wrapper}>
            <div className={s.img}>
                { loader && (<div className="loader ssc-square"/>)}
                  <div ><img src={photo.url} alt={photo.title} /></div>
            </div>
            <div>
                { loader && (<h3 className="loader ssc-head-line"/>)}
                <h3>{photo.title}</h3>
                { loader && (<a className="loader ssc-line"/>)}
                <Link to= {`/album/${photo.albumId}`} >{photo?.album?.title}</Link>
            </div>
        </div>
    );
};


export default Photos;
