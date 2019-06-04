import React from 'react'
import {Input, Form, FormGroup, Label, Col, Button} from 'reactstrap'
import NewQuestion from './newQuestion';

export default class createSurveyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surveyTitle: '',
            surveyAuthor: '',
            surveyDescription: '',
            surveyQuestions: [],
            surveyRecipients: [],
            addAQuestion: false,
        }
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    createNewQuestion = () => {
        this.setState({addAQuestion: true})
    }

    addAQuestion = (question) => {
        const questions = [...this.state.surveyQuestions, question];
        this.setState({
            surveyQuestions: questions,
            addAQuestion: false,
        })
    }

    submitSurvey = () => {
        fetch("https://ti-survey-server.herokuapp.com/api/saveShell", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                author: this.state.surveyAuthor,
                title: this.state.surveyTitle,
                description: this.state.surveyDescription,
                questionList: this.state.surveyQuestions,
                recipientList: this.state.surveyRecipients,
            })
        })
            .then((res) => res.json())
            .then(() => {
                this.props.resetState();
            })
            .catch((err) => console.log(err))
    }

    render() {
        let inputs = ["Title", "Author", "Description"]
        return (
            <div>
                <div className="titleBar">
                    <h1>Create Survey</h1>
                </div>

                <Form className="createSurveyForm">

                    {inputs.map((value, index) => {
                        return (
                            <FormGroup row key={index}>
                                <Label for={`survey${value}`} sm={2} className="font-weight-bold">{value}:</Label>
                                <Col sm={10}>
                                    <Input type="text" name={`survey${value}`} onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                        )
                    })}

                    <FormGroup row>
                        <Label sm={2} className="font-weight-bold">Questions:</Label>
                    </FormGroup>

                    {this.state.addAQuestion ?
                        <NewQuestion addAQuestion={this.addAQuestion}/> :
                        <span>
                    <Button color="info" onClick={this.createNewQuestion}>+ Add a Question</Button>
                    <br/>
                </span>
                    }
                    <br/>

                    <Button color="info" onClick={this.submitSurvey}>Submit</Button>
                </Form>
            </div>
        )
    }
}