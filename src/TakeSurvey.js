import React from 'react'
import RadioQuestion from './RadioQuestion'
import CheckBoxQuestion from './CheckBoxQuestion'
import {Input, Label, FormGroup} from 'reactstrap'
import {Button} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class TakeSurvey extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userAnswers: [],
            surveyTaker: {},
            checkedAlready: new Set()

        }
    }

    render() {
        return (
            <div>
                {this.props.survey.questionList.map((q, i) => {
                    switch (q.responseType) {
                        case "Radio": {
                            return <RadioQuestion question={q} index={i} onClick={(resp) => {
                                this.handleClickRadio(resp, i)
                            }}/>
                        }
                        case "Checkbox": {
                            return <CheckBoxQuestion question={q} index={i} onClick={(resp) => {
                                this.handleClickCheck(resp, i)
                            }}/>
                        }
                        case "Freeform": {
                            return (
                                <FormGroup>
                                    <Label for="exampleText">{q.question}</Label>
                                    <Input type="textarea" name="text" id="exampleText"
                                           onChange={(onChange) => this.handleInputChange(onChange, i)}/>
                                </FormGroup>)
                        }
                    }
                })
                }
                <FormGroup>
                    <Label for="exampleText">Your Name</Label>
                    <Input type="textarea" name="text" id="name" onChange={this.readName}/>
                    <Label for="exampleText">Your Email</Label>
                    <Input type="textarea" name="text" id="email" onChange={this.readEmail}/>
                </FormGroup>

                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }

    readName = (event) => {
        let taker = this.state.surveyTaker
        taker.name = event.target.value
        this.setState({surveyTaker: taker})
    }
    readEmail = (event) => {
        let taker = this.state.surveyTaker
        taker.email = event.target.value
        this.setState({surveyTaker: taker})
    }


    handleInputChange = (event, i) => {
        let arr = this.state.userAnswers
        arr[i] = (event.target.value)
        //console.log(arr[i])
        //console.log(i)
        this.setState({userAnswers: arr})
        console.log(this.state.userAnswers)
    }

    handleClickRadio = (answer, i) => {
        //let joined =this.state.userAnswers.concat(answer)
        let arr = this.state.userAnswers
        arr[i] = answer
        this.setState({userAnswers: arr})
        console.log("this is ", this.state.userAnswers);
    }


    handleClickCheck = (answer, i) => {

        let arr = this.state.userAnswers
        if (arr[i] === undefined) {
            arr[i] = new Set();
        }
        if (arr[i].has(answer)) {
            //if(this.state.checkedAlready.has(answer)){
            //let anotherSet=arr[i];//this.state.checkedAlready;
            //anotherSet.delete(answer)
            arr[i].delete(answer)
            //this.setState({checkedAlready:arr[i]})
        } else {
            arr[i].add(answer)
            //this.state.checkedAlready.add(answer)
            //console.log (this.state.checkedAlready)//arr[i]=[arr[i],answer]
        }
        //arr[i]=this.state.checkedAlready
        //this.setState({checkedAlready:new Set()})
        //arr[i]=Array.from(this.state.checkedAlready).toString()
        this.setState({userAnswers: arr})
        //TODO:find a way to drop the checks from a different question
        console.log(this.state.userAnswers)
    }

    setUpAnswers = () => {
        let arr = this.state.userAnswers
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Array.from(arr[i]).toString()
        }
        this.setState({userAnswers: arr})
    }

    submit = () => {
        this.setUpAnswers()
        let data = {
            'shellId': this.props.id,
            'surveyTaker': this.state.surveyTaker,
            'userAnswers': this.state.userAnswers
        }
        fetch('https://ti-survey-server.herokuapp.com/api/saveAnswers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(function (response) {
                console.log(response);//DON""T LOG. DISPLAY A SUCCESS MESSAGE IN MODAL
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default TakeSurvey