import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

class RenderCheckbox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            questionInfo: this.props.questionInfo,
        }
    }

    render() {
        let newActualAnswer=[];
        let answers = this.state.questionInfo.potentialAnswers.map((potentialAnswer, i) => {
            return <CardText key={i}>{potentialAnswer +" : " +
                    this.state.questionInfo.allAnswers.reduce((sum, actualAnswer) => {
                        newActualAnswer = actualAnswer.split(", ")
                        for(let i=0; i<this.newActualAnswer.length; i++){
                        return potentialAnswer === actualAnswer[i] ? ++sum : sum;}
                    }, 0)
            }</CardText>
        });

        return (
            <div>
                <Card>
                    <CardImg top width="100%"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Red_Checkmark.svg/341px-Red_Checkmark.svg.png"
                             alt="Card image cap" style={{width: 50, height: 50, justifyContent: 'center'}}></CardImg>
                    <CardBody>
                        <CardTitle><b>Question:</b> {this.state.questionInfo.question}</CardTitle>
                        <CardSubtitle><b>Question Type:</b> {this.state.questionInfo.questionType}</CardSubtitle>

                        <CardText><b>Answers:</b></CardText>
                        {answers}
                    </CardBody>
                </Card>

            </div>);
    }
}

export default RenderCheckbox;