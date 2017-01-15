/* eslint-disable consistent-return */
import { PurchaseRequests, TextParser } from '../../../purchaseRequests/purchaseRequests.js';

let module;

const handler = (data, promise) => {
  try {
    
    module = promise;
    let { ...mongoData } = data;
    let purchaseObj = TextParser(mongoData.text);
    // Insert into the Mongo Collection.
    let newRecord = {
    	...mongoData,
    	dollarAmount: purchaseObj.dollarAmount,
    	link: purchaseObj.link,
    	qty: parseInt(purchaseObj.qty)
    };
    let purchaseId = PurchaseRequests.insert({ ...newRecord, createdAt: new Date() });
    console.log('purchase id: =>', purchaseId);
    return `Brett bot has recieved your request for ${mongoData.text} Purchase Id#: \`${purchaseId}\` `;

  } catch (exception) {
    module.reject(`[purchaseRequest.handler] ${exception}`);
  }

};

export const purchaseRequest = (data) => handler(data);