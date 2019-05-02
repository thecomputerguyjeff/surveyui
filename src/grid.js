import React from 'react';
import { Table,Card, CardBody, CardHeader } from 'reactstrap';
//import './themecss.css'; 

export default class Grid extends React.Component {
  render() {
    let items = this.props.surveys.map((item, key) =>
    <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
            </tr>)
    return (
        <Table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </Table>
    );
  }
}