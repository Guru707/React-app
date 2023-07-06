import { Component } from "react";


class Card extends Component{

render(){
    const {id,name,email,website} = this.props.list;
    return(
        <div className="card-element" key={id} alt={`user ${name}`}>
                    <img src={`https://robohash.org/${id}?set=set4&size=250x250`}/>
                    <p >{name}</p>
                    <p >{email}</p>
                    <p >{website}</p>
                    </div>
    )
}
}
export default Card;