import React from 'react';
import { connect } from 'react-redux';
import './filmDescription.css';

const FilmDescription = ({ filmDescription, browserHistory }) => {
    let onShowAllFilms = () => {
        browserHistory.push('/films');
    }

    return (
        <div className='margi-size-20'>
            <button className='btn-back' onClick={onShowAllFilms}>Back</button>
            <div className='t-c'> <img className='descript-img' src={filmDescription.show.image.original} /></div>
            <div> <h4>{filmDescription.show.name}</h4></div>
            <div dangerouslySetInnerHTML={{ __html: filmDescription.show.summary }} />
        </div>
    )
};

const mapStateToProps = state => ({
    filmDescription: state.rootState.film,
    browserHistory: state.rootState.browserHistory
})

export default connect(mapStateToProps, null)(FilmDescription)

