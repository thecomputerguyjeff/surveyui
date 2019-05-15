import React from 'react'
import FilterDropDown from './filterdropdown'
import {Input, Button} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            filter: '',
            searchCritera: '',
        };
    }

    handleInputChange = (event) => {
        console.log(event.target.value)
        this.setState({searchCritera: event.target.value})
    }

    submit = () => {
        this.state.filter(this.state.searchCritera)
      }

    changeFilter = (index) =>{
        this.setState({filter:this.props.fetch[index]})
    }
    
    render(){
        return(
            <div className="searchBar d-flex justify-content-around">
                <Input type="search" name="keyword" placeholder="Search..." onChange={this.handleInputChange}className="searchInput"/>
                <FilterDropDown changeFilter={this.changeFilter} className="transparent-btn"/>
                <Button outline color="light" onClick={this.submit}  className="transparent-btn"><FontAwesomeIcon icon="search"/></Button>
            </div>
        );
    }
}