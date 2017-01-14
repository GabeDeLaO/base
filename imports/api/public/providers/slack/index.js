/* eslint-disable consistent-return */

import { Meteor } from 'meteor/meteor';
import { purchaseRequest } from './purchase-request.js';

const slackToken = 'TjmgjoiNVrf4BIgQqBzJODRy';

const scenarios = {
  '/brett': purchaseRequest,
};

const handler = ({body}) => {
	try{
		const { command, ...data } = body;
		const scenario = scenarios[command];
		if( scenario ) return scenario(data);
	} catch (exception) {
		throw new Meteor.Error('500', `[slackHandler.handler] ${exception}`);
	}
}

export const slackHandler = (options) => handler(options);