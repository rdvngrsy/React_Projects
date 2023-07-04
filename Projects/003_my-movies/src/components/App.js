import React from "react";
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import axios from 'axios';
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component{

    state = {
        movies: [],
        searchQuery: ""
    }

/******************************************************************************************************************** */

// Fake Test API JSON verisinin alınması. npx json-server --watch src/api/movies.json --port 3002
    // async componentDidMount(){
    //     const baseURL = "http://localhost:3002/movies"
    //     const response = await fetch(baseURL)
    //     console.log(response)
    //     const data = await response.json()
    //     console.log(data)
    //     this.setState({movies:data})
    // }

// Yukarıdakine fetch methoduna alternatif olarak Axios methodu var. Daha pratik.
    async componentDidMount(){
        const response = await axios.get('http://localhost:3002/movies')
        this.setState({movies:response.data})
    }


/******************************************************************************************************************** */
    // deleteMovie = (movie) => {
    //     const newMovieList = this.state.movies.filter((m) => m.id !== movie.id)

    //     this.setState(state => ({
    //         movies:newMovieList
    //     }))
    // }


// Fetch Api ile deleteMovie methodunun yazılması.
    // deleteMovie = async (movie) => {

    //     const baseURL = `http://localhost:3002/movies/${movie.id}`
    //     await fetch(baseURL,{
    //         method:"DELETE"
    //     })

    //     const newMovieList = this.state.movies.filter((m) => m.id !== movie.id)

    //     this.setState(state => ({
    //         movies:newMovieList
    //     }))
    // }


// Axios Api ile deleteMovie methodunun yazılması.


    deleteMovie = async (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`)

        const newMovieList = this.state.movies.filter((m) => m.id !== movie.id)
        this.setState(state => ({
            movies:newMovieList
        }))
    }
/******************************************************************************************************************** */


    searchMovie = (event) => {
        this.setState({searchQuery: event.target.value})
    }

    addMovie = async (movie) => {

        await axios.post(`http://localhost:3002/movies/`,movie)

        this.setState(state => ({
            movies: state.movies.concat([movie])
        }))
    }

    editMovie = async (id,updatedMovie) => {

        await axios.put(`http://localhost:3002/movies/${id}`,updatedMovie)
    }

    render(){

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        ).sort((a,b) => {
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0
        })


        return(

            <Router>
                <Routes>
                    <Route path="/" element={
                        <React.Fragment> 
                            <div className="container">
                                <div className="row">
                                        <SearchBar 
                                            searchMovieProp = {this.searchMovie}
                                        />
                                </div>
        
                                <MovieList 
                                    movie = {filteredMovies}
                                    deleteMovieProp = {this.deleteMovie}
                                />
                            </div>
                        </React.Fragment>
                    }>
                    </Route>

                    <Route path="/add" element={
                        <AddMovie 
                            onAddMovie = {(movie) => {this.addMovie(movie)}}
                        />
                    }/>

                    <Route path="/edit/:id" element={ 
                        <EditMovie 
                            onEditMovie = {(id,movie) => {this.editMovie(id,movie)}}
                        />
                    }/>
                </Routes>
            </Router>
        )
    }
}


export default App;