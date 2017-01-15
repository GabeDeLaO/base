import React from 'react';
import { Jumbotron, Table, Row, Col } from 'react-bootstrap';

import { createContainer } from 'meteor/react-meteor-data';
import { PurchaseRequests } from '../../api/purchaseRequests/purchaseRequests.js';

export const Index = (props) => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Base</h2>
      <p>A starting point for Meteor applications.</p>
      <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.11.0</p>
    </Jumbotron>

    <Table>
      { props.purchases.map((request) => ( <Row><Col xs={12}>{request.text}</Col></Row> ))}
    </Table>
  </div>
);

export default createContainer(() => {
  return{
    purchases: PurchaseRequests.find({}).fetch(),
  };
}, Index);
