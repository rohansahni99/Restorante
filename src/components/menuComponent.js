
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent'
class Menu extends Component {

  constructor(props) {
      super(props);

      this.state = {
          selectedDish: null,
          comments: null
      }
  }

  onDishSelect(dish) {
      this.setState({ 
        selectedDish: dish,
        comments: dish.comments});
  }

  render() {
      const menu = this.props.dishes.map((dish) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={dish.id}
                onClick={() => this.onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle><strong>{dish.name}</strong></CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });

      return (
          <div className="container">
              <div className="row">
                  {menu}
              </div>
                <DishdetailComponent selectedDish = {this.state.selectedDish} comments = {this.state.comments}/>
          </div>
      );
  }
}
export default Menu;