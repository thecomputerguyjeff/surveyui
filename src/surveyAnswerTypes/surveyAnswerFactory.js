import React from 'react'
import {Input} from 'reactstrap'
import Radio from '../surveyAnswerTypes/radio';
import Numeric from './numeric';

export default class SurveyAnswerFactory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            min: -Infinity,
            max: Infinity,
        }
    }

    handleInputChange = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }

    checkIfGreater = () =>{
            return this.state.min < this.state.max
    }
    render(){
        switch(this.props.answerType){
            case "Radio":
                return(
                    <Radio text={<Input type="text" name="radioText"></Input>} name="name"
                        onChange = {this.props.handleInput}/>
                    )
            case "Numeric":
                return(
                    <span>
                        Range between 
                            <Numeric className="numericRange"name="min"
                            handleInput = {this.handleInputChange}/> and 
                            <Numeric className="numericRange"validationCheck={this.checkIfGreater} name="max"
                            handleInput = {this.handleInputChange}/>
                    </span>
                )
            case "Freeform":
                return(
                    <p>User will be given a textbox.</p>
                )
            case "Checkbox":
                    return(
                        <p>Need to get checkbox.</p>
                    )
            default:
                    return(
                        <p>Invalid response selected.</p>
                    )
        }
    }
}