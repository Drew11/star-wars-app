import React from 'react';
import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import FilmList from '../film-list/film-list';
import Search from '../search/search';
import './app.css';

const getSortCallback = (field) => {
    switch (field) {
        case 'title':
            return (a, b) => a[field].localeCompare(b[field]);
    }
};

class App extends React.Component {

    swapiService = new SwapiService();

    state = {
        searchQuery: '',
        sortField: '',
        films: null,
    };

    setSearchQuery = (searchQuery) => {
        this.setState({searchQuery})
    };

    sortFilms = () => {
        const {sortField} = this.state;

        sortField === 'title' ?
            this.setState(prevState => ({
                films: [...prevState.films].reverse()
            }))
            :
            this.setState({sortField: 'title'}, () => {
                this.setState(prevState => ({
                    films: [...prevState.films].sort(getSortCallback(this.state.sortField))
                }))
            });

    };

    getFilteredFilms = () => {
        const {films, searchQuery} = this.state;
        if (films) {
            return films.filter(film => film.title.toLocaleLowerCase()
                .includes(searchQuery.toLocaleLowerCase()));
        }

    };

    componentDidMount() {
        this.swapiService.getAllFilms()
            .then(films =>
                this.setState({films}))
    }

    render() {
        const {searchQuery} = this.state;

        return (
            <div className="App">
                <Header/>

                <Search
                    setSearchQuery={this.setSearchQuery}
                    searchQuery={searchQuery}
                />
                <div className="sort">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.sortFilms}
                    >
                        Sort by title
                    </button>
                </div>
                <FilmList visibleFilms={this.getFilteredFilms()}/>
            </div>
        );
    }

}

export default App;
