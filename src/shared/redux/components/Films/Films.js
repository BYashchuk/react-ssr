import React from 'react';
import { connect } from 'react-redux';
import ItemFilm from './ItemFilm/itemFilm'
import { showDescription } from '../../containers/root/actions';
import './films.css';

const Films = ({ films, onShowDescription, browserHistory }) => {
    return (
        <div className='container'>
            {films.length !== 0
                ? films.map((film, key) => {
                    const filmProps = {
                        film: film,
                        onShowDescription: onShowDescription,
                        browserHistory: browserHistory
                    }
                    return <ItemFilm key={key} {...filmProps} />
                })
                : <div className='t-c'>
                    <h2 className='t-c error'>Error Film</h2>
                    <button className='btn-back' onClick={() => { browserHistory.push('/'); }}>Back</button>
                </div>
            }
        </div>
    )
};

const mapStateToProps = state => ({
    films: state.rootState.films,
    browserHistory: state.rootState.browserHistory
})

const mapDispatchToProps = dispatch => ({
    onShowDescription: film => dispatch(showDescription(film))
})


export default connect(mapStateToProps, mapDispatchToProps)(Films)
