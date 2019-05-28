import React from 'react'
import {Label,Input, Button} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import SurveyAnswerFactory from '../surveyAnswerTypes/surveyAnswerFactory';

export default class NewQuestion extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            question:'',
            answerType: null,
            answers: [''],
            answerCount: 1,
        }
    }

    selectAnswerType = (index) => {
        this.setState({answerType: index})
    }

    addToAnswerCount = () =>{
        const list = this.state.answers.concat('');
        this.setState({answerCount: this.state.answerCount+1,
                answers: list,})
    }

    getAnswerJSX = () => {
        let answersjsx =[]
        for (let i=0; i<this.state.answerCount; i++){
            answersjsx.push(<SurveyAnswerFactory 
                            answerType={this.state.answerType} 
                            key={i}
                            id={i}
                            handleInput={(e)=>this.addAnswers(this.id, e)}/>);
        
        }
        return(
            <div>
            {answersjsx}
            </div>
        )
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    addAnswers = (i, event) => {
        console.log(event.target.value);
        this.setState(state => {
            const answers = state.answers.map((answer, j) => {
                if (j === i){
                    return event.target.value;
                } else {
                    return answer;
                }
            })
            return answers;});
    }

    render(){
        let buttons = [["dot-circle","Radio"],
                        ["check-square", "Checkbox"],
                        ["i-cursor", "Freeform"],
                        ["percent", "Numeric"]
                    ]

        return(
            <div className="newQuestionForm">
            <Button close />
            <h4>New Question</h4>
            <Label for="question">Question:</Label>
            <Input type="text" name="question" onChange={this.handleInputChange}></Input>
            <br/>

            
            
            <br/>

            {this.state.answerType === null ?
                //if no answertype show the options
                (buttons.map((value, index) => {
                    return <span key={index}> <Button onClick={() => this.selectAnswerType(value[1])}><FontAwesomeIcon icon= {value[0]} />  {value[1]}</Button>{' '}</span>
                })):
                //once answerType was set, display that type
                (<div>
                {this.getAnswerJSX()}
                {this.state.answerType === "Radio" || this.state.answerType === "Checkbox"?
                <Button size="sm" onClick ={this.addToAnswerCount}>
                +
                </Button>: null}
                </div>
                )}

            <br />
            <Button 
                color="info" 
                onClick={() =>this.props.addAQuestion({
                    question:this.state.question,
                    answerType: this.state.answerType,
                })}>
            <FontAwesomeIcon icon="check"/>
            </Button>
            </div>
        )
    }
}