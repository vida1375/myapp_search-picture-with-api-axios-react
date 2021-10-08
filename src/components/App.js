import React from "react";
import Search from "./Search";
import ImageList from "./ImageList";
import axios from "axios";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            images:[],
            error:''
        }
    }
    onSearchSubmit = (term) =>{
        console.log(term)
        axios.get('https://api.unsplash.com/search/photos',{
            headers: {'Authorization': 'Client-ID xBL9w7KI3FjzwvjsNkYaRldH2ZK3jeq6uSKrEjR2kbI'},
            params : {'query': term}
        })
        .then((response) => {
         console.log(response)
         this.setState({
             images:response.data.results
         })
     })
     .catch((error) => {
         this.setState({
             error : error
         })
     })
    }
    render(){
        return(
            <div>
               <Search searchSubmit={this.onSearchSubmit} />
               <ImageList images ={this.state.images} />
            </div>
        )
    }
}

export default App;