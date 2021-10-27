import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import {marvelReducer} from "./marvelReducer";



export const rootReducer = combineReducers({
    marvel:marvelReducer,
    ui: uiReducer,
    auth: authReducer
})

