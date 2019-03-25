import React from 'react';
import "isomorphic-fetch";
import './search.css'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueRef: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch(`http://api.tvmaze.com/search/shows?q=${this.refs.searchInput.value}`)
            .then(response => response.json())
            .then(data => {
                this.props.onSearchFilms(data);
                this.props.browserHistory.push('/films');
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                <div className='bg-silver'>
                    <form className='form-on-center' onSubmit={this.handleSubmit}>
                        <h1 className='h1'>What do you want to see?</h1>
                        <input className='search-input' ref='searchInput' type="text" placeholder="What are you looking for..." />
                    </form>
                </div>
            </div>
        );
    }
}

export default Search