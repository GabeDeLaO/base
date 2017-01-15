import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

export default class PurchaseRequestsList extends React.Component {

	constructor(props) {
		super(props);
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
								<strong>{purchase.user_name }</strong> asked for <strong>{purchase.qty}</strong> items @ <strong>${purchase.dollarAmount}</strong> each Request ID: <code>{purchase._id}</code>
							</ListGroupItem> )}
					</ListGroup>
					: 
					<Alert bsStyle="warning">No requests yet.</Alert>
				}
			</div>
		);
	}
}
