import React from 'react'
import Radio from './Templates/radio';


export default class RadioQuestion extends React.Component {

    render() {
        return (
            < div> {this.props.question.question}
                {this.props.question.responseChoices.map(resp => {
                    return (<Radio text={resp} name={this.props.index} onClick={() => this.props.onClick(resp)}/>)
                })}

            </div>
        )
    }
}