import React, { Component } from 'react';
import HOCLoader from "./HOC/HOCLoader"

class ContactList extends Component {
  render() { 
    let listOfContact = this.props.contactsData.filter((contact) =>{
      let contactName = contact.name.title+" "+contact.name.first+" "+contact.name.last;
      return contactName.indexOf(this.props.searchFilter) !== -1
    })
    return (
      <div className="">
      {
          listOfContact.map((contact) =>(
              <div key={contact.phone} className="Conatct-details">
                <div><img src={contact.picture.large} /> </div>
                <div>
                  <p>Name: {contact.name.title} {contact.name.first} {contact.name.last}</p>
                  <p>Phone: {contact.phone}</p>
                  <p>Email: {contact.email}</p>
                </div>
              </div>
          ))
      }
      </div>
    );
  }
}

export default HOCLoader(ContactList);
