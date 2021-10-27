import React from 'react';
import {useSelector} from "react-redux";
import {CardComic} from "../comics/CardComic";
import {Navbar} from "../ui/Navbar";


export const Favorites = () => {
    const {favorites} = useSelector(state => state.marvel);


    return (
        <div>
            <Navbar/>
            <div className="container mt-2">
                <h1>Tus Favorites </h1>
                <hr/>

                <div className="row">
                    <div className="col-7">

                        {favorites ? favorites.map((comic) =>
                            <CardComic
                                key={comic.id}
                                {...comic}
                            />
                        ) : console.log("espere")}

                    </div>
                </div>
            </div>
        </div>
    )
}
