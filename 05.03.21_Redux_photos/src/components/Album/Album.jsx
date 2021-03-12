import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getUser, reset} from "../../redux/actions";
import Home from "../Home/Home";

import 'skeleton-screen-css'
import s from "./Album.module.css"

const Album = () => {
    const { albumId } = useParams()

    const dispatch = useDispatch()

    const user = useSelector(state => state.api.user)
    const loader = useSelector(state => state.loader.isLoading)

    useEffect(() => {
        dispatch(getUser(albumId))
        return () => dispatch(reset())
    }, [])


    return (
        <div>
            <h2  className={s.title}>{user.name}</h2>
            { loader && !user.name && (<h2 className="ssc-head-line"/>)}
            <a className={s.link} href={`mailto:${user.email}`}>{user.email}</a>
            { loader && !user.email && (<a className="ssc-line"/>)}
            <Home albumId={albumId}/>
        </div>
    )
}

Album.propTypes = {

};


export default Album;
