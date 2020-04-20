import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        console.log(dish)
        if (dish != null)
            return(
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
    function RenderComments({comments}) {
        console.log(comments)
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
            
              <div>
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
     
     
    const  DishdetailComponent = (props) => {
        return (
         <div className= "container">
          <div className="row">
              <RenderDish dish={props.dish} />
              <RenderComments comments={props.comments}/>
            </div>  
             </div> 
          )
    }
     

export default DishdetailComponent;