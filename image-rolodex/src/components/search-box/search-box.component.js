import { Component } from "react";


class SearchBox  extends Component{

    render(){
        return <div>
             <input className="searchbox" placeholder={this.props.placeholder} type="text" onChange={this.props.onChangeHander}/>
        </div>
    }
}
export default SearchBox;