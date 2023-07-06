// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
// function App() {
//   return (
//     <div >
//      {/* <Product /> */}
//      <CardList cardVal={} />
//     </div>
//   );
// }
class App extends Component{
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
     const {clickSearch  } = this;
  

      let neArr = monster.filter(
          (val) => {
              return val.name.toLocaleLowerCase().includes( inputVal);
          }
      );
      
  return <>
    <div className='pt-4'>
        <h1 className='app-title'>Cat  List</h1>
     <SearchBox  onChangeHander={clickSearch} className={"searchbox"} placeholder={'Search List'} />
     <CardList lists={neArr}  />
     
      </div>
      </>
}
}

export default App;
