import React from 'react';
import Radio from './Templates/radio'
//import './themecss.css'; 

export default class Survey extends React.Component {
  render() {
    return (
        <div>
        {this.props.questionList.map(item=>{
            return(<Radio text={item.question} />)
        })}
        </div>
    )    
  }
}