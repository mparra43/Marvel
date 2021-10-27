import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Navbar} from "../ui/Navbar";
import './styles/comicScreen.css'

import {addComic} from "../../actions/comic";

export const ComicScreen = ({history}) => {

    const {comic} = useSelector(state => state.marvel);

    const {id} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleComic= (data) => {
        dispatch(addComic ({
            uid: id,
            cid: data.id,
            title: data.title,
            description: data.description,
            image: data.image,
        }))
    }

    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <div className="row mt-5">
                    <div className="col-4">
                        <img
                            src={comic.image}
                            alt={comic.title}
                            className="img-thumbnail animate__animated animate__fadeInLeft"
                        />
                    </div>

                    <div className="col-8 animate__animated animate__fadeIn">
                        <h3> {comic.title} </h3>
                        <ul className="list-group list-group-flush">
                            {comic.creators !== [] ?
                                <li className="list-group-item"><b> Creadores:</b> {comic.creators.map((e) => (
                                    e.name+","
                                ))} </li> :
                                <li className="list-group-item"><b> Creadores: </b> {comic.title} No tiene creadores
                                    asociados </li>
                            }
                            {comic.characters !== [] ?
                                <li className="list-group-item"><b> Personajes:</b> {comic.characters.map((e) => (
                                    e.name
                                ))} </li> :
                                <li className="list-group-item"><b> Personajes: </b> {comic.title} No tiene personajes
                                    asociados </li>
                            }
                        </ul>

                        <h5> Descripción </h5>
                        {comic.description != null ?
                            <p> {comic.description} </p> :
                            <p> {comic.title}, no tiene descripción </p>
                        }

                        <button
                            className="btn btn-outline-info"
                            onClick={()=>{handleComic(comic)}}
                        >
                            Agregar a tus favoritos
                        </button>
                    </div>

                </div>
            </div>
        </>

    )
}
