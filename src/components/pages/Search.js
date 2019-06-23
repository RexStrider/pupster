import React, {Component} from "react";
import API from "../../Utils/API";

// const Search = () => (
//     <section>
//         <h1>Search By Breed!</h1>
//         <label>Breed Name: </label>
//         <input type="text" />
//         <button id="submit">Submit</button>
//     </section>
// )

class Search extends Component {
    state = { 
        breedName: ""
    }

    handleInputChange = event => {
        this.setState({breedName: event.target.value});
    }

    handleSubmit = event => {
        // console.log(this);
        // console.log(event);
        event.preventDefault();

        API.searchBreed(this.state.breedName).then((req, res) => {
            // console.log("API Search Breed")
            this.setState({breedArr: res.data.message})
        });
    }



    render() { 
        return ( 
            <section>
                <h1>Search By Breed!</h1>
                <label>Breed Name: </label>
                <input
                value={this.state.breedName}
                onChange={this.handleInputChange}
                type="text" />
                <button id="submit" onClick={this.handleSubmit}>Submit</button>
            </section>
        );
    }
}
 
export default Search;