import React from 'react';
import Image1 from '../images/download.jpg';
import Image2 from '../images/picture.jpg';
const getSeason = (Lat , month) =>{
     if(month >2 && month<9){
         return Lat>0 ? 'summer':'winter';
     }
     else{
         return Lat<0 ? 'winter':'summer';
     }
}
const Season =( props) =>{
     const season = getSeason(props.latitude , new Date().getMonth);
     console.log(season);
    return(
        <section className="seasonn">
        { season === 'summer'?
        <section>
            <img src={Image1} />
            <p> it is hot</p>
        </section>
        :
        <section>
        <img src={Image2} />
        <p> it is cold</p>
    </section>
        }
        </section>
    )

}
export default Season;