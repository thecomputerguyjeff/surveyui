import React from 'react'
import Radio from './Templates/radio';


export default class RadioQuestion extends React.Component {

    render() {
        return (
            <div> 
                <span className="surveyQuestion">
                    {this.props.question.question}
                </span>
                {this.props.question.responseChoices.map(resp => {
                    return (<Radio text={resp} key={resp}name={this.props.index} onClick={() => this.props.onClick(resp)}/>)
                })}
            </div>
        )
    }
}