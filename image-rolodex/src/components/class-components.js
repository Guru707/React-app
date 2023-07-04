import { Component } from "react";

class Product extends Component{
    constructor(){
        super();

        this.state = {
            monster : [],
            inputVal: ''
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
        let neArr = this.state.monster.filter(
            (val) => {
                 console.log("ddd",val)
                return val.name.toLocaleLowerCase().includes( this.state.inputVal);
            }
        );
        
    return <>
       <input className="searchbox" placeholder="Search" type="text" onChange={(event) => {
       let inputfiled  = event.target.value.toLocaleLowerCase();
            this.setState(()=>{
              return {inputVal:inputfiled}
             })
       }}/>
      {neArr.map(data => <p> ${data.name} </p>)} 
        </>

}
}




export default Product;