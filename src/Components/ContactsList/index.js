import React, { Component } from 'react';
import Contact from '../Contact';
import iconPhone from './images/phone-call.png';
import male from './images/male.png';
import female from './images/female.png';

class ContactsList extends Component{

    render(){
        return(
            <div>
      {
                this.props.contacts.map((el) => (
                  <div className = "contact">
                      <div id="icon">{
                    el.gender !== 'anonim' && (el.gender == 'male'? <img alt="male" id="male" src={male}/> : <img alt="female" id="female" src={female}/>)
                    } 
                      </div>
                      <div className="inf">
                        <span id="name">{el.firstName} {el.lastName}</span>
                       <br/><img id='iconPhone' alt='phone' src={iconPhone}/><span id="phone">{el.phone}</span><hr/>
                      </div>
                  </div>        
            ))
     }
         </div>
        );
    };
}

export default ContactsList;