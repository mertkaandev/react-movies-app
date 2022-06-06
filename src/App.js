import React from 'react';
import SearchBar from "./components/SearchBar.js";
import MovieList from './components/MovieList.js';
import axios from "axios";

/* Class Based App Component */
class App extends React.Component {
 
  /* State */
  state = {
     movies: [],

     /* Search Bar value is kept as state as search Query. */
    searchQuery: ""
  }

  async componentDidMount(){
    const response = await axios.get("http://localhost:3001/movies")
    this.setState({movies: response.data})
  }
 
  /* Delete movie function with axios - it renders new movies */
  deleteMovie = async (movie) => {
     
      axios.delete(`localhost:3002/movies/${movie.id}`)
      const movieList = this.state.movies.filter(
          m => m.id !== movie.id
      );

      /* Change State */
      this.setState({
          movies: movieList
      })
  };

  /* Update State */
  searchMovie = (event) => {
      this.setState({searchQuery: event.target.value})
  }

  render(){

    /* Filtered Movies */
    let filteredMovies = this.state.movies.filter(
      (movie) => {return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1}
    )

    return (
      <div className='container'>

         <div className='row'>
            <div className="col-lg-12">
               <SearchBar searchMovieProp={this.searchMovie} />
            </div>
         </div>

         <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie}/>
      </div>
    );

  }

}

export default App;

