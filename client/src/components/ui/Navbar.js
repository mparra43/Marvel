import React from 'react'
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {startLogout} from '../../actions/auth';


export const Navbar = () => {

    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/"
                    >
                        {name}
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/favorites"
                    >
                         Favoritos
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <button  className="btn btn-outline-info" onClick={handleLogout}>
                        <span> Salir</span>
                    </button>
                </ul>
            </div>
        </nav>

    )
}
