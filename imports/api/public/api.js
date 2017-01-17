import bodyParser from 'body-parser';
import { Picker } from 'meteor/meteorhacks:picker';
import { handleWebhook } from './handle-webhook.js';

Picker.middleware( bodyParser.json() );
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

Picker.route('/api/webhooks/:provider', ({ provider }, request, response) => {
 // We'll handle the request here.
 	handleWebhook({ provider, request })
 	.then((result) => {
 		//console.log('result', result);
		response.statusCode = 200;
		response.setHeader('Content-Type', 'application/json');
		response.end(result);
	})
	.catch((error) => {
		console.warn(error);
		response.statusCode = 500;
		response.end(error);
	});
});