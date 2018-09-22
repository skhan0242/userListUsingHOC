import React, {Component} from "react";
import "../../../src/index.css"

const HOCLoader = (WrapperComponent) =>{
    return class HOCLoader extends Component{
        render(){
            return this.props.contactsData.length === 0 ? <div className="loader"></div> : <WrapperComponent {...this.props} />
        }
    }
}

export default HOCLoader;