// import React from "react";
import axios from "axios";

const API = {
    getRandomDog: () => axios.get("https://dog.ceo/api/breeds/image/random"),
    
    searchBreed: (breedName) => axios.get(`https://dog.ceo/api/breed/${breedName}/images`)
}
 
export default API;