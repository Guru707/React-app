import { Component } from "react";

class CardList extends Component{

    render(){
        const { lists } = this.props ;
        console.log(lists)
        return (
        <div>
            {lists.map((list) => (
                <h3 key={list.id}>{list.name}</h3>
            ))}
        </div>
        )
    }
}


export default CardList;