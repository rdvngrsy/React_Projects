import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {


    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                <div className="row my-5">
                    <div className="col-lg-10">
                        <input
                            onChange={this.props.searchMovieProp} 
                            type="text" 
                            placeholder="Film İsmi Giriniz..." 
                            className="form-control"
                        />
                    </div>
                    <div className="col-lg-2">
                        <Link 
                            to="/add"
                            type="button" 
                            className="btn"
                            style={{float:'right',backgroundColor:'#7CFC00'}}>Add Movie
                        </Link>
                    </div>
                </div>
            </form>
        )
    }
}



export default SearchBar