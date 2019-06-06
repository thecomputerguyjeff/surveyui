import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

class RenderRadio extends React.Component{

   constructor(props) {
       super(props)
       this.state = {
           questionInfo: this.props.questionInfo,
       }
       
   }


      render() {
        let answers = this.state.questionInfo.potentialAnswers.map((potentialAnswer, i) => {
            return <CardText key={i}>{potentialAnswer +" : " +
                    this.state.questionInfo.allAnswers.filter(t=>t !== null)
                    .reduce((sum, actualAnswer) => {
                        return potentialAnswer === actualAnswer ? ++sum : sum;
                    }, 0)
            }</CardText>
        });
      
        return (
          
               <div>
               
                                                 
         <Card>
           <CardImg top width="100%" src="https://i.stack.imgur.com/OWcpX.png" alt="Card image cap" style={{width: 50, height: 50, justifyContent: 'center'}}></CardImg>
           <CardBody>
             <CardTitle><b>Question:</b> {this.state.questionInfo.question}</CardTitle>
             <CardSubtitle><b>Question Type:</b> {this.state.questionInfo.questionType}</CardSubtitle>
             <CardText><b>Answers:</b></CardText>
                          { answers}   
           </CardBody>
         </Card>

       </div>);    
       
   }
   

}
export default RenderRadio;