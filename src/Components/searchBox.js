import React, {Component} from "react";
import ContactList from "./contactList";

class SearchBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            contactData : [],
            searchItem: ''
        }
      }
    
      changeHandler(e){
        this.setState({
          searchItem: e.target.value.substr(0,20)
        })
      }

      componentDidMount(){
        fetch("https://api.randomuser.me/?nat=us,gb&results=50").then((data) => data.json()).then(contactdata =>{
          console.log(contactdata.results);
          this.setState({
            contactData :contactdata.results
          })
        })
      }

    render(){
        return(
            <div>
                 <label>Search Contact:</label><br />
                <input type="text" value={this.state.searchItem0} placeholder="Search Name" onChange={this.changeHandler.bind(this)}/ >
                <ContactList searchFilter={this.state.searchItem} contactsData = {this.state.contactData} />
            </div>
        )
    }
}

export default SearchBox;