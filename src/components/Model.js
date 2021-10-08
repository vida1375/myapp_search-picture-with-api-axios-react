import React from 'react';
import Icon from '../images/imagess1.jpg';

const Model = () =>{
    return(
        <section className="profile">
             <h1 style={{ textAlign:"center"}}>My Profile</h1>
             <img src={Icon} />
             <section>
             <p>First Name : </p>
             <p>Last Name : Doe</p>
             </section>
             <section style={{marginTop:'30px'}}>
             <p> Age:37</p>
             <p>Job:Employee</p>
             <p>Email:Johndoe@mail.com</p>
             <p>Phone Number: +21342323</p>
             </section>
             <section style={{marginTop:'30px', marginBottom:'50px'}}>
             <p> Hobbies: Tennis,Rugby,Reading</p>
             <p>Education: Industrial engineering</p>
             </section>
        </section>
        
    )
}
export default Model;