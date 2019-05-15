import React from 'react'
import {Label,Input, Button, FormGroup} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Radio from '../surveyAnswerTypes/radio';

export default class NewQuestion extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            question:'',
            answerType: null,
        }
    }

    selectAnswerType = (index) => {
        this.setState({answerType: index})
    }

    getAnswerJSX = () => {
        return(
            (<Radio text={<Input type="text" name="radioText"></Input>} name="name"/>)
        )
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
            <Label for="newQuestion">Question:</Label>
            <Input type="text" name="newQuestion"></Input>
            <br/>

            
            
            <br/>

            {this.state.answerType === null ?
                //if no answertype show the options
                (buttons.map((value, index) => {
                    return <span> <Button key={index} onClick={() => this.selectAnswerType(index)}><FontAwesomeIcon icon= {value[0]} />  {value[1]}</Button>{' '}</span>
                })):
                //once answerType was set, display that type
                //(<Radio text={<Input type="text" name="radioText"></Input>} name="name"/>)
                this.getAnswerJSX()
              }
            </div>
        )
    }
}