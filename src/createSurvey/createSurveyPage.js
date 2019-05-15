import React from 'react'
import {Input, Form, FormGroup, Label, Col, Button} from 'reactstrap'
import NewQuestion from './newQuestion';

export default class createSurveyPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            surveyTitle: '',
            surveyAuthor: '',
            surveyQuestions: [],
            addAQuestion: false,
        }
    }

    createNewQuestion = () => {
         this.setState({addAQuestion: true})
    }

    render(){
        return (
        <div>
            <div className="titleBar">
                <h1>Create Survey Page</h1>
            </div>
            <Form className="createSurveyForm">
                <FormGroup row>
                    <Label for="surveyTitle" sm={2}>Title:</Label>
                    <Col sm={10}>
                        <Input type="text" name="surveyTitle" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="surveyAuthor" sm={2}>Author:</Label>
                    <Col sm={10}>
                        <Input type="text" name="surveyAuthor" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="surveyDescription" sm={2}>Description:</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="surveyDescription" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Label sm={2}>Questions:</Label>
                </FormGroup>

                {this.state.surveyQuestions}

                {this.state.addAQuestion ? 
                <NewQuestion /> : 
                <Button color="info" onClick ={this.createNewQuestion}>+ Add a Question</Button>
                }

                
            </Form>
            </div>
        )
    }
}