import { Component } from "react";
import './card-list-style.css';
import Card from '../card/card.component';

class CardList extends Component{

    render(){
        const { lists } = this.props ;
            
        return (
        <div className="card-list">
            {lists.map((list) => {
                
                return(<Card list={list} />)
            })}
        </div>
        )
    }
}


export default CardList;