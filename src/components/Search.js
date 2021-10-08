import React from "react";
class Search extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           term :''
       }
   }
   onInputChange = (event) =>{
       this.setState({
           term : event.target.value
       })
   }
   onTermSubmit = (event) =>{
    event.preventDefault();
    this.props.searchSubmit(this.state.term)
   }
   render(){
       return(
           <section>
               <form className="search" onSubmit={this.onTermSubmit}>
                   <label >  Enter the word:</label><br/>
                   <input type="text" value={this.state.term} onChange={this.onInputChange} /> <br/>
                   <button type="submit" > submit</button>
               </form>
           </section>
       )
   }
}
export default Search;