import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Alert, Button, Row, Col, Glyphicon } from 'react-bootstrap';
import { HTTP } from 'meteor/http';
import { PurchaseRequests } from '../../api/purchaseRequests/purchaseRequests.js';

let CosentialSlackWebHook = 'https://hooks.slack.com/services/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';
let slackWebhook = 'https://hooks.slack.com/services/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';

export default class PurchaseRequestsList extends React.Component {

	constructor(props) {
		super(props);
		this._deny = this._deny.bind(this);
		this._complete = this._complete.bind(this);
	}

	_complete(purchaseId) {
		console.log('Complete', purchaseId);
		let purchaseOrder = PurchaseRequests.find({_id: purchaseId}).fetch();
		let payload = JSON.stringify({ channel: purchaseOrder.user_name,  text: "Brett has placed your order. He will take a <bonus.ly> now. Thanks!" });
		PurchaseRequests.update(
			{ _id: purchaseId },
			{
				$set: {
					isApproved: true,
					isArchived: true
				}
			});
		console.log('p o', purchaseOrder);
		HTTP.call("POST", CosentialSlackWebHook,
			{ content: payload },
			function (error, result ){
				if(error) {
					console.log('Error', error);
				}
				console.log('Result', result);
			}
		);
	}

	_deny(purchaseId) {
		console.log('Deny', purchaseId);
		let purchaseOrder = PurchaseRequests.find({_id: purchaseId}).fetch();
		let payload = JSON.stringify({ channel: purchaseOrder.user_name, text: "Brett has denied your request." });
		PurchaseRequests.update(
			{ _id: purchaseId },
			{
				$set: {
					isApproved: false,
					isArchived: true
				}
		});
		console.log('p o', purchaseOrder);
		HTTP.call("POST", CosentialSlackWebHook,
			{ 
				content: payload 
			},
			function (error, result ){
				if(error) {
					console.log('Error', error);
				}
				console.log('Result', result);
			}
		);
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
										<a href={purchase.link} target="_blank">
											<Button className="btn-white btn-sm pull-right">
												<Glyphicon glyph="link"/> Link
											</Button>
										</a>
										<Button onClick={()=> this._complete(purchase._id)} className="btn-white btn-sm pull-right">
											<Glyphicon glyph="ok-sign"/> Complete
										</Button>
										<Button onClick={()=> this._deny(purchase._id)} className="btn-white btn-sm pull-right">
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
