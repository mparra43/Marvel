import React from 'react'
import {useSelector} from "react-redux";
import {CardComic} from '../comics/CardComic';



export const ListComic = () => {

    const {comics} = useSelector(state => state.marvel);


    return (

        <div className="card-columns animate__animated animate__fadeIn">
            {comics ? comics.map((comic) =>
                <CardComic
                    key={comic.id}
                    {...comic}
                />
            ) : console.log("espere")}
        </div>
    )
}