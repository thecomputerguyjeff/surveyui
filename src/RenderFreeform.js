 import React from 'react'
 import { Card, CardImg, CardText, CardBody,
     CardTitle, CardSubtitle} from 'reactstrap';

 class RenderFreeform extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            questionInfo: this.props.questionInfo,
        }
    }


     render() {
            
       let answers = [];
       let answer = "";
            for (let j=0; j<this.state.questionInfo.allAnswers.length; j++){
              answer = this.state.questionInfo.allAnswers[j];
              
            answers.push(answer)
          } 
        
         return (
                <div>
                
                                                  
          <Card>
            <CardImg top width="100%" src="http://www.attachmax.com/p/2018/11/printable-wide-ruled-lined-paper-world-of-label-regarding-lined-paper-wide-ruled-600x600.png" alt="Card image cap" style={{width: 50, height: 50, justifyContent: 'center'}}></CardImg>
            <CardBody>
              <CardTitle><b>Question:</b> {this.state.questionInfo.question}</CardTitle>
              <CardSubtitle><b>Question Type:</b> {this.state.questionInfo.questionType}</CardSubtitle>
              
              <CardText><b>Answers:</b></CardText>
                          { answers.map((t, i)=> <CardText key={i}>{t}</CardText>)}   
           </CardBody>
          </Card>

        </div>);    
        
    }
 }
 export default RenderFreeform;