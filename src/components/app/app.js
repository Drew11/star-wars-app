import React from 'react';
import SwapiService from '../../services/swapi-service';
import Header from '../header/header';
import FilmList from '../film-list/film-list';
import Search from '../search/search';
import './app.css';

class App extends React.Component{

      swapiService = new SwapiService();

      state = {
          searchQuery: '',
          filmList: null,
          visibleFilms: null,
          isSort: false
      };

  setSearchQuery = (searchQuery) => {
      this.setState({searchQuery});
  };

  sort = () => {
      this.setState(prevState=>({isSort: !prevState.isSort}));
  };

  componentDidMount(){
      this.swapiService.getAllFilms()
          .then(filmList=>
              this.setState({
                  filmList,
                  visibleFilms: filmList
              })
          );
  }

  componentDidUpdate(prevProps, prevState){
      const {searchQuery, filmList, isSort} = this.state;

      if(prevState.searchQuery !== searchQuery || prevState.isSort !== isSort) {

          const filteredFilms = filmList.filter(film=>film.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));
          if(isSort) {
              const visibleFilms = [...filteredFilms].sort((a, b)=>a.title.localeCompare(b.title));
              this.setState({visibleFilms})
          }
          if(!isSort) {
              const visibleFilms = [...filteredFilms].sort((a, b)=>b.title.localeCompare(a.title));
              this.setState({visibleFilms})
          }
      }
  }
  render(){
      const {visibleFilms, searchQuery} = this.state;

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
                      onClick={this.sort}
                  >
                      Sort by title
                  </button>
              </div>
              <FilmList visibleFilms={visibleFilms}/>
          </div>
      );
  }

}

export default App;
