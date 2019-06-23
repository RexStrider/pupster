import React, {Component} from 'react';
import API from "../../Utils/API";



class Discover extends Component {
    state = { 
        randomDog: ""
    }

    async componentDidMount () {
        
        // const result = await API.getRandomDog(res.data);
        

        API.getRandomDog()
        .then(res => {
            console.log(res.data);
            this.setState({randomDog: res.data.message});
        });
    }

    render() { 
        console.log(this.state);
        return ( 
            <section>
                <h1>Make new friends</h1>
                <h2>Thumbs up on any pups you'd like to meet!</h2>
                <img src={this.state.randomDog} alt="cute dog goes here" />
                <button id="thumbs-down">Thumbs Down</button>
                <button id="thumbs-up">Thumbs Up</button>
            </section>
         );
    }
}
 
export default Discover;