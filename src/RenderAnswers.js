import React from 'react'
import RenderCheckbox from './RenderCheckbox.js'
import RenderRadio from './RenderRadio.js'
import RenderNumeric from './RenderNumeric.js'
import RenderFreeform from './RenderFreeform.js'

class RenderAnswers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: {},
            questions: [],
        }
    }

    howtorender() {
        return (
            this.state.questions.map((data) => {

                switch (data.questionType) {
                    case "Radio":
                        return <RenderRadio questionInfo={data}/>
                    case "Numeric":
                        return <RenderNumeric questionInfo={data}/>
                    case "Checkbox":
                        return <RenderCheckbox questionInfo={data}/>
                    case "Freeform":
                        return <RenderFreeform questionInfo={data}/>
                    default:
                        return <div></div>
                }
            })
        )
    }

    render() {
        return (
            <div>
                {this.howtorender()}
            </div>
        )
    }

    componentWillMount() {
        this.onClick(this.props.id)
    }

    onClick = (id) => {

        fetch("https://ti-survey-server.herokuapp.com/api/getAnswers/" + id)
            .then((res) => res.json(),
                (err) => {
                    console.log("Couldn't access database.")
                    console.log(err);
                })
            .then((result) => {
                    this.setState({answers: result})
                    this.setState({questions: this.state.answers.questions})

                    if (this.state.questions.length !== 0) {
                        console.log("Success")
                    }
                }, (err) => {
                    console.log("There was an error mapping to json")
                    console.log(err)
                })
    }
}

export default RenderAnswers;