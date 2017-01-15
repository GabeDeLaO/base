/* eslint-disable consistent-return */
//import { PurchaseRequests, TextParser } from '../../../purchaseRequests/purchaseRequests.js';

let module;

const handler = (data, promise) => {
  try {
    module = promise;
   	//console.log('purchase request data', data);
   	let { ...mongoData } = data;
   	console.log('purchase request data : =>', mongoData);
   	//let txt = TextParser(mongoData.text);
   	//console.log('purchase request text : =>', txt);
   	//var purchaseId = PurchaseRequests.insert(mongoData);
   	return `Brett bot has recieved your request for ${mongoData.text}`;
  } catch (exception) {
    module.reject(`[purchaseRequest.handler] ${exception}`);
  }
};

export const purchaseRequest = (data) => handler(data);