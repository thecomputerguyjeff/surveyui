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
        
        if(this.state.questions !== undefined){
        return(
        this.state.questions.map((data, i) => {

            switch (data.questionType) {
                case "Radio":
                    return <RenderRadio key={i} questionInfo={data}/>
                case "Numeric":
                    return <RenderNumeric key={i} questionInfo={data}/>
                case "Checkbox":
                    return <RenderCheckbox key={i} questionInfo={data}/>
                case "Freeform":
                    return <RenderFreeform key={i} questionInfo={data}/>
                default:
                    return <div key={i}>The answer to this survey cannnot be loaded right now. Please be sure that questions were added to this survey.</div>
            }
        })
        )}
        else{
            return <div>The survey you chose cannnot be loaded right now. Please try again later</div>
        }
        
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

                }, (err) => {
                    console.log("There was an error mapping to json")
                    console.log(err)
                })
    }
}

export default RenderAnswers;