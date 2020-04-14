import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
class DishdetailComponent extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            
        }
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
     renderComments(comments) {
         if(comments!= null){
        var commentList = comments.map(comment => {
            return (
               
                    <li key={comment.id} >
                        {comment.comment}
                        <br /><br />
                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        <br /><br />
                    </li>
            
            );
        });
        return(
            <div  className="col-12 col-md-5 m-1">
              
            <h4>Comments</h4>
            <ul className="list-unstyled">
                
                    {commentList}
             
            </ul>
              </div>
        );
    }
    else
     return(
         <div></div>
     );
     }
     
    
    render() {
        const dish = this.props.selectedDish;
        const comments = this.props.comments;
        console.log(comments)
        // const renderComments = this.props.selectedDish.comments.map((comments) =>{
        //     return(
        //     <div key={comments.id}>
        //     <div>{comments.comment}</div>
        //     <div>`-- {comments.author}, {comments.date}`</div>
        //     </div>
        //     );
        // });
        return (
            <div className= "row">
              <div  className="col-12 col-md-5 m-1">
              {this.renderDish(dish)}
              </div>
              
              {this.renderComments(comments)}
              
              </div>
        )
    }
}

export default DishdetailComponent;