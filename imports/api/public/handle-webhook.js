/* eslint-disable consistent-return */
import { stripeHandler } from './providers/stripe';
import { slackHandler } from './providers/slack';

let module;

const providers = {
	stripe: stripeHandler,
	slack: slackHandler
};

const handler = ({ provider, request }, promise) => {
	try {
		module = promise;
		const targetProvider = providers[provider];
		if (targetProvider) responseMessage = targetProvider({ body: request.body }) || 'Webhook received!';
		module.resolve(responseMessage);
	} catch (exception) {
		module.reject(`[handleWebhook.handler] ${exception}`);
	}
};

export const handleWebhook = (options) =>
	new Promise((resolve, reject) =>
		handler(options, { resolve, reject }));