import React from 'react'
import {FormGroup,Input,Label} from 'reactstrap'

export default class CheckBox extends React.Component{
    render(){
        return(
            <FormGroup check>
            <Label check>
              <Input type="checkbox" id={this.props.id} onClick={()=>this.props.onClick()}/>{' '}
              {this.props.text}
            </Label>
          </FormGroup>
        )
    }
} 