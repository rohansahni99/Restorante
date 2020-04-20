import React, { Component } from 'react';
import Menu from './menuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null,
        comments: null,
    };
  }

  onDishSelect(dish) {
     
    this.setState({ 
        selectedDish: dish,
         comments: dish.comments,
  })
  }
  render() {
      //const dish = this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0];
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)} />
        <DishDetail dish= {this.state.selectedDish} comments = {this.state.comments} />
        <Footer />
      </div>
    );
  }
}

export default Main;