import {types} from '../types/types';

const initialState = {
    comics: [],
    favorites: [],
    showPokemon: [],
    comic: {}
}

export const marvelReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.getComicAll:
            return {
                ...state,
                comics: action.payload.data,
            }

        case types.getComicFavorites:
            console.log(action.payload)
            return {
                ...state,
                favorites: action.payload.data,
            }

        case types.findComic:
            return {
                ...state,
                comic: action.payload,
            }
        case types.postComic:
            return {
                ...state,
                favorites: action.payload.data
            }


        default:
            return state;

    }
}