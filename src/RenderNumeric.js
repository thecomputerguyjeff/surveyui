 import React from 'react'
 import { Card, CardImg, CardText, CardBody,
     CardTitle, CardSubtitle} from 'reactstrap';

 class RenderNumeric extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            questionInfo: this.props.questionInfo,
        }
    }


     render() {
      let answers = new Map();
       let answer = "";
            for (let i=0; i<this.state.questionInfo.allAnswers.length; i++){
                answer = this.state.questionInfo.allAnswers[i];
              if(answers.has(answer)){
              answers.set(answer, answers.get(answer)+1);
          }
          else{
              answers.set(answer, 1);
          } 
        }

        let done = false;
        let toprinter = [];
        let keyValue = answers.entries();
        while(!done){
            let toprint = keyValue.next().value;
            try{if(!toprint.includes(undefined)){debugger;
                 toprinter.push(toprint[0] +" : "+ toprint[1])
            }}catch(exception){
                done=true;
            }
        }
        

         return (
                <div>
                                                                  
          <Card>
            <CardImg top width="100%" src="https://www.jqueryscript.net/images/Simple-Nice-jQuery-Value-Range-Slider-Plugin-Fresh-Slider.jpg" alt="Card image cap" style={{width: 50, height: 50, justifyContent: 'center'}}></CardImg>
            <CardBody>
              <CardTitle><b>Question:</b> {this.state.questionInfo.question}</CardTitle>
              <CardSubtitle><b>Question Type:</b> {this.state.questionInfo.questionType}</CardSubtitle>
              
              <CardText><b>Answer:</b></CardText>
                       {toprinter.map(y => <CardText>{y}</CardText>)}
           </CardBody>
          </Card>

        </div>);    
        
    }
 }
 export default RenderNumeric;