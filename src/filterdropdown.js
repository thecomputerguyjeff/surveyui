import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class FilterDropDown extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            dropdownOpen: false,
            filterName: "Choose a Category"
        };
    }

    toggle = () => {
        this.setState( prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    onClick = (index,name) => {
        this.setState({ 
            filterName: name,
        });        
        this.props.changeFilter(index);
    }

   render() {
       return (
           <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
            {this.state.filterName}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick = {() => this.onClick(0, "Title")}>Title</DropdownItem>
                <DropdownItem onClick = {() => this.onClick(1, "Author")}>Author</DropdownItem>
                </DropdownMenu>
            </Dropdown>
       );
   } 
}