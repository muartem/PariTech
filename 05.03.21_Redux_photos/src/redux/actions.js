import {GET_PHOTO, GET_PHOTOS, GET_USER, HIDE_LOADER, RESET, SHOW_LOADER} from "./types";
import API from "../API";

export function getPhotos(start, album){
    return async dispatch => {
        dispatch(showLoader())
        const photos = await API.getPhotos(start, album)
        dispatch(
            {
                type: GET_PHOTOS,
                payload: photos
            }
        )
        dispatch(hideLoader())
    }
}

export function getPhoto(id){
    return async dispatch => {
        dispatch(showLoader())
        const photo = await API.getPhoto(id)
        dispatch(
            {
                type: GET_PHOTO,
                payload: photo
            }
        )
        dispatch(hideLoader())
    }
}

export function getUser(id){
    return async dispatch => {
        dispatch(showLoader())
        const user = await API.getUser(id)
        dispatch(
            {
                type: GET_USER,
                payload: user
            }
        )
        dispatch(hideLoader())
    }
}

export function reset(){
    return dispatch => {
        dispatch(
            {
                type: RESET,
            }
        )
    }
}

export function showLoader(){
    return {
        type: SHOW_LOADER
    }
}
export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}
