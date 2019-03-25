import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Films from '../../components/Films/Films';
import FilmDescription from '../../components/FilmDescription/FilmDescription';
import NotFound from '../../components/NotFound';
import './root.css'

import {
    searchFilms
    , sayBye
} from './actions'

const Root = ({
    props,
    onSearchFilms,
    browserHistory
}) => {

    const searchProps = {
        props,
        onSearchFilms,
        browserHistory
    }

    return (
        <div className='container-fluid'>
            <Router history={browserHistory}>
                <ul>
                    <li>
                        <NavLink to="/">Search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films">Films</NavLink>
                    </li>
                    <li>
                        <NavLink to="/film-description">FilmDescription</NavLink>
                    </li>
                </ul>

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => <Search {...searchProps} />}
                    />
                    <Route exact path="/films" component={Films} />
                    <Route exact path="/film-description" component={FilmDescription} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

const mapStateToProps = state => ({
    browserHistory: state.rootState.browserHistory
})

const mapDispatchToProps = dispatch => ({
    onSearchFilms: nameFilm => dispatch(searchFilms(nameFilm)),
    onSayBuy: () => dispatch(sayBye())
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)