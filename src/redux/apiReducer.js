import {GET_PHOTO, GET_PHOTOS, GET_USER, RESET} from "./types";

const initialState = {
    photos: [],
    photo: {},
    user: {}
}

export const apiReducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_PHOTOS:
            return {
                ...state,
                photos: [...state.photos, ...action.payload]
            }
        case GET_PHOTO:
            return {
                ...state,
                photo: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case RESET:
            return {
                ...state,
                photos: [],
                photo: {},
                user: {}
            }

        default: return state
    }
}

