import { Component } from "react";

class Product extends Component{
    constructor(){
        super();

        this.state = {
            monster : []
        };        
    }
    componentDidMount(){
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json() )
        .then(data => this.setState(
            
            () => {
                return {monster : data}                
            },
            () => {
                console.log(this.state.monster)
            }
        ))
        
    }
    
    render(){
        console.log("Set state",this.setState())
    return <>
      {this.state.monster.map(data => <p> ${data.name} </p>)} 
        </>

}
}




export default Product;