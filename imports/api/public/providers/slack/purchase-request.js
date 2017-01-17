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
    let titleText = `*Brett-bot* has received your request for purchase. \`${purchaseId}\` `;
    let resp = {
        text: titleText,
        attachments : [
            {
                text: "Please be patient, Brett will reach out to you."
            },
            {
                text: purchaseObj.link
            }
        ]
    };
    //return `Brett-bot has recieved your request for Purchase Id#: \`${purchaseId}\` Reminder: DO NOT reach out to Brett, he will reach out to you.`;
    return JSON.stringify(resp);
  } catch (exception) {
    module.reject(`[purchaseRequest.handler] ${exception}`);
  }

};

export const purchaseRequest = (data) => handler(data);