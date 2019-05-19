import React from 'react';
import { Table} from 'reactstrap';
//import './themecss.css'; 

export default class Grid extends React.Component {
  
  render() {
    return (
        <Table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {this.props.surveys.map((item) => {
                return (
                <tr key={item.id} onClick={() => this.props.onClick(item.id)}>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
            </tr>)})}
            </tbody>
        </Table>
    );
  }
}