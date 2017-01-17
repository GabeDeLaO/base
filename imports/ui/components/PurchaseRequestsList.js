import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Alert, Button, Row, Col, Glyphicon } from 'react-bootstrap';

export default class PurchaseRequestsList extends React.Component {

	constructor(props) {
		super(props);
		this._deny = this._deny.bind(this);
		this._complete = this._complete.bind(this);
	}

	_complete(purchaseId) {
		console.log('Complete', purchaseId);
	}

	_deny(purchaseId) {
		console.log('Deny', purchaseId);
	}

	componentDidMount(){

	}

	render(){
		return(
			<div>
				{ this.props.purchases.length > 0 ? 
					<ListGroup className="RequestsList">
						{this.props.purchases.map( (purchase) => 
							
							<ListGroupItem key={ purchase._id }>
								<Row>
									<Col xs={7}>
										<strong>{purchase.user_name }</strong> asked for <strong>{purchase.qty}</strong> items @ <strong>${purchase.dollarAmount}</strong> each<br/>
										 Request ID: <code>{purchase._id}</code>
									</Col>
									<Col xs={5}>
										<Button className="btn-white btn-sm pull-right">
											<a href={purchase.link} target="blank"><Glyphicon glyph="link"/> Link</a>
										</Button>
										<Button onClick={()=> this._deny(purchase._id)} className="btn-white btn-sm pull-right">
											<Glyphicon glyph="ok-sign"/> Complete
										</Button>
										<Button onClick={()=> this._complete(purchase._id)} className="btn-white btn-sm pull-right">
											<Glyphicon glyph="remove-sign"/> Deny
										</Button>
									</Col>
								</Row>
							</ListGroupItem> 

						)}
					</ListGroup>
					: 
					<Alert bsStyle="warning">No requests yet.</Alert>
				}
			</div>
		);
	}
}
