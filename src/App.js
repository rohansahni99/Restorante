import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/menuComponent';
import { DISHES } from './shared/dishes.js';

class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      dishes : DISHES
    };
  }

  render() {
    return (
    <div className="App">
      <Navbar dark color= "primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Funsion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes= {this.state.dishes}/>
    </div>
      
    );
  
}
}

export default App;

