import React from 'react'
import FilterDropDown from './filterdropdown'
import {Input, Button} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            filter: '',
        };
    }

    submit() {
        
        
      }

    changeFilter = (index) =>{
        this.setState({filter:this.props.fetch[index]})
    }
    render(){
        return(
            <div className="searchBar d-flex justify-content-around">
                <Input type="text" name="keyword" placeholder="Search..." className="input"/>
                <FilterDropDown changeFilter={this.changeFilter} className="categories"/>
                <Button outline color="light" onClick={this.submit}><FontAwesomeIcon icon="search" /></Button>
            </div>
        );
    }
}