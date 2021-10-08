import React from 'react';
import Season from './Season.js' ;
class Help extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            latitude : '' ,
            errorMessage:''
        }
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({latitude: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        )
    }

    render(){
        return <Season latitude={this.state.latitude} />
    }
}
export default Help;