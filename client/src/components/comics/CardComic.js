import React from 'react'
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {findComic} from '../../actions/comic';

export const CardComic = (comic) => {

    const dispatch = useDispatch();

    const handleComic= (data) => {
        dispatch(findComic(data))
    }

    return (
                <div key={ comic.id } className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={comic.image} className="card-img" alt={comic.title}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"> {comic.title}</h5>
                                <Link to={ `/comic/${ comic.title }` }>

                                    <button
                                        className="btn btn-outline-info"
                                        onClick={()=>{handleComic(comic)}}
                                    >
                                        Más...
                                    </button>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
    )
}