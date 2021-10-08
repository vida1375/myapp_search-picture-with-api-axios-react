import React from "react";
class ImageList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            toggle:false
        }
    }
     renderImages = ()=>{
       return this.props.images.map(({urls , description , id}) =>{
       return <div className="image-item" key ={id}> <img src={urls.small} alt={description} /></div>
        })
    }
    showImages = () =>{
        this.setState({
            toggle : !this.state.toggle
        })
        // if(this.myRef.current.style.display === "flex"){
        //     this.myRef.current.style.display = "none";
        // }
        // else{
        //     this.myRef.current.style.display = "flex";
        // }
    }
    render(){
        return(
            <section className="image-list" >
                 <h2 onClick ={this.showImages}> your search result :</h2>
                <section style={{display :this.state.toggle ? "block" : "none"}} >{this.renderImages()}</section>
            </section>
        )
    }
}
export default ImageList;