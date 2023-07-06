import { Component } from "react";
import './search-box.css'

class SearchBox  extends Component{

    render(){
        return <div>
             <input className={`search_input ${this.props.className}`} placeholder={this.props.placeholder} type="text" onChange={this.props.onChangeHander}/>
        </div>
    }
}
export default SearchBox;