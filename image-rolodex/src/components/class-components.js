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
               // console.log(this.state.monster)
            }
        ))
     
    }
     clickSearch = (event) => {
        let inputfiled  = event.target.value.toLocaleLowerCase();
             this.setState(()=>{
               return {inputVal:inputfiled}
              });
        }
    render(){
       const {monster, inputVal  } = this.state;
       console.log("new state" , monster, this.state)
       const {clickSearch  } = this;
       console.log("box value ", monster)
        let neArr = monster.filter(
            (val) => {
                return val.name.toLocaleLowerCase().includes( inputVal);
            }
        );
        
    return <>
       <input className="searchbox" placeholder="Search" type="text" onChange={clickSearch}/>
      {neArr.map(data => <p> ${data.name} </p>)} 
        </>

}
}




export default Product;