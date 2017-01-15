import React from 'react';
import { Jumbotron, Table, Row, Col } from 'react-bootstrap';


const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Base</h2>
      <p>A starting point for Meteor applications.</p>
      <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.11.0</p>
    </Jumbotron>
    <Table>
    	<Row>
    		<Col xs={12}>Test</Col>
    	</Row>
    </Table>
  </div>
);

export default Index;
