import React from 'react'
import { Card, CardText, CardBody, CardImg} from 'reactstrap';

class RenderError extends React.Component{

    render() {
     
        return (
               <div>
                                                                 
         <Card>
         <CardImg top width="100%" src="http://www.digital-web.com/wp-content/uploads/2014/01/false-2061131__340.png" alt="Card image cap" style={{width: 50, height: 50, justifyContent: 'center'}}></CardImg>
           <CardBody>
              <CardText>{this.props.message}</CardText>
          </CardBody>
         </Card>

       </div>);    
       
   }
}
export default RenderError;