import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import {LoginScreen} from '../components/auth/LoginScreen';
import {MainScreen} from '../components/mainscreen/MainScreen';
import {ComicScreen} from '../components/comics/ComicScreen';
import {Favorites} from '../components/favorites/Favorites';
import {startChecking} from '../actions/auth';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';
import {getAllComics, getAllFavorites} from "../actions/comic";


export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, id} = useSelector(state => state.auth);

    useEffect(() => {

        dispatch(startChecking());
        dispatch(getAllComics());
        dispatch(getAllFavorites())
    }, [dispatch])

    if (checking) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticated={!!id}
                    />


                    <PrivateRoute
                        exact
                        path="/main"
                        component={MainScreen}
                        isAuthenticated={!!id}
                    />


                    <PrivateRoute
                        exact
                        path="/comic/:name"
                        component={ComicScreen}
                        isAuthenticated={!!id}
                    />

                    <PrivateRoute
                        exact
                        path="/favorites"
                        component={Favorites}
                        isAuthenticated={!!id}
                    />


                    <Redirect to="/main"/>
                </Switch>
            </div>
        </Router>
    )
}
