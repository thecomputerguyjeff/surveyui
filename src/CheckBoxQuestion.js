import React from 'react'
import{FormGroup,Input,Lable} from 'reactstrap'
import Radio from './Templates/radio'
import { resolveObject } from 'url';
import CheckBox from './Templates/CB'
export default class CheckBoxQuestion extends React.Component{
    render(){
        return(
            <div> {this.props.question.question}
            {this.props.question.responseChoices.map(resp=>{
                return(<CheckBox text={resp} name={this.props.index} onClick={()=>this.props.onClick(resp)}/>)
            })}
            </div>
        )
    }
}