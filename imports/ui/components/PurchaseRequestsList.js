import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Alert, Button, Row, Col, Glyphicon } from 'react-bootstrap';

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
								<Row>
									<Col xs={7}>
										<strong>{purchase.user_name }</strong> asked for <strong>{purchase.qty}</strong> items @ <strong>${purchase.dollarAmount}</strong> each<br/>
										 Request ID: <code>{purchase._id}</code>
									</Col>
									<Col xs={5}>
										<Button className="btn-info btn-sm pull-right"><a href={purchase.link} target="blank">Link</a></Button>
										<Button className="btn-white btn-sm pull-right">Complete</Button>
										<Button className="btn-white btn-sm pull-right"><Glyphicon glyph="star" />Deny</Button>
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
