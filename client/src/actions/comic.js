import {fetchWithToken} from '../helpers/fetch';
import {types} from '../types/types';


export const getAllComics = () => {
    return async (dispatch) => {

        const resp = await fetchWithToken('all');
        const data = await resp.json();
        try {
            dispatch({type: types.getComicAll, payload: data})
        } catch (e) {
            console.log(data.msg)
        }
    }
}


export const addComic = (comic) => {
    return async (dispatch) => {
        const resp = await fetchWithToken('addFavorite', comic, 'POST');
        const favorites = await resp.json();
        try {
            if (favorites.ok) {
                const resp = await fetchWithToken('allFavorites');
                const data = await resp.json();
                dispatch({type: types.postComic, payload: data})
            }
        } catch (e) {
            console.log(favorites.msg)
        }
    }
}
export const getAllFavorites = () => {

    return async (dispatch) => {
        const resp = await fetchWithToken('allFavorites');
        const favorites = await resp.json();

        try {
            dispatch({type: types.getComicFavorites, payload: favorites})
        } catch (e) {
            console.log(favorites.msg)
        }
    }
}
export const findComic = (comic) => {
    return function (dispatch) {
        dispatch({type: types.findComic, payload: comic });
    }
}





