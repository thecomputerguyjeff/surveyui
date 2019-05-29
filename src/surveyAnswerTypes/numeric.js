import React from 'react'
import {FormGroup, Label, Input, FormFeedback} from 'reactstrap'

export default class Numeric extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: true,
        }
    }

    checkIfNumber = (i) => {
        return !Number.isNaN(i)
    }

    handleInput = (event) => {
        let extraValidation = this.props.validationCheck ? this.props.validationCheck() : true
        let input = Number(event.target.value)
        this.props.handleInput(event)
        this.setState({isValid: this.checkIfNumber(input) && extraValidation})
    }

    render() {
        return (
            <FormGroup>
                <Label for="exampleEmail">{this.props.label}</Label>
                <Input className={this.props.className}
                       invalid={!this.state.isValid}
                       onBlur={this.handleInput}
                       name={this.props.name}/>
                <FormFeedback invalid>
                    Uh oh! Looks like you typed in something invalid.
                </FormFeedback>
            </FormGroup>
        )
    }
}