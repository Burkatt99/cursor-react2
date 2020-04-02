import React, { Component } from 'react';
import Contact from './Components/Contact';

class Contacts extends Component{
    render(){
        return(
            <div>
      {
                this.props.contacts.map((el) => (
                  <div class = "contact">
                      <div id = "icon"></div>
                      <div class="inf">
                        <span id="name">{el.firstName} {el.lastName}</span>
                        <br/><span id="phone">{el.phone}</span><hr/><hr/>
                      </div>
                  </div>        
            ))
     }
         </div>
        );
    };
}

export default ConstantSourceOptions;