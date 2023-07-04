import React from "react";
import axios from 'axios';


class EditMovie extends React.Component {

    state = {
        name:"",
        rating:"",
        overview:"",
        imageURL:""
    }

    async componentDidMount(){
        const id = window.location.pathname.replace("/edit/", "")

        //console.log(id)

        const response = await axios.get(`https://my-movies-api.netlify.app/movies.json/${id}`);
        const movie = response.data

        this.setState({
            name: movie.name,
            rating: movie.rating,
            overview: movie.overview,
            imageURL: movie.imageURL
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        let url = window.location.origin
        const {name,rating,overview,imageURL} = this.state
        const id = window.location.pathname.replace("/edit/", "")
        const updatedMovie = {
            name,
            rating,
            overview,
            imageURL
        }

        this.props.onEditMovie(id,updatedMovie)
        window.location.replace(url)
    }

    onInputChange = (e) => {
        console.log(e.target.name)

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Edit Movie.." disabled />
                    <div className="row mt-3">
                        <div className="form-group col-md-10 text-light">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control mt-2"
                                name="name"
                                value={this.state.name}
                                onChange={this.onInputChange} />
                        </div>
                        <div className="form-group col-md-2 text-light">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                name="rating"
                                value={this.state.rating}
                                onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12 mt-3 text-light">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                name="imageURL" 
                                value={this.state.imageURL}
                                onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12 mt-3 text-light">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control mt-2"
                                name="overview" rows="5"
                                value={this.state.overview}
                                onChange={this.onInputChange} ></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger btn-block col-md-12 my-4" value="Edit Movie" />
                </form>
            </div>
        )
    }
}



export default EditMovie