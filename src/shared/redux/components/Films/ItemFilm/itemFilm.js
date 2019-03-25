import React from 'react';
import './itemFilm.css'

const ItemFilm = ({ film, onShowDescription, browserHistory }) => {

    let redirectToDescription = () => {
        browserHistory.push('/film-description');
    }

    return (
        <div className='item-film' onClick={() => { onShowDescription(film); redirectToDescription() }}>
            <div> <img className='item-img' src={film.show.image.original} /></div>
            <div><h4>{film.show.name}</h4></div>
            <div className='genre'>  {film.show.genres.map((genre, key) => {
                return <span key={key}>{genre} </span>
            })}
            </div>
        </div>
    )
};

export default ItemFilm;