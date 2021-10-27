import React from 'react';
import {Navbar} from '../ui/Navbar';
import {ListComic} from "../comics/ListComic";


export const MainScreen = () => {
    return (
        <div>
            <div className="home">
                <div>
                    <Navbar/>
                </div>
                <div className="container mt-2">
                    <ListComic/>
                </div>
            </div>
        </div>
    )
}
