import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import PurchaseRequestsList from '../containers/PurchaseRequestsList.js';

export default PurchaseRequests = () => (
  <div className="purchases">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Purchase Requests</h4>
        </div>
        <PurchaseRequestsList />
      </Col>
    </Row>
  </div>
);
