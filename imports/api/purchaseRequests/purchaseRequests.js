import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const PurchaseRequests = new Mongo.Collection('PurchaseRequests');
export default PurchaseRequests;

PurchaseRequests.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

PurchaseRequests.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

export const TextParser = (purchase) => {
	
	let purchaseText = {};
		purchaseText.dollarAmount = purchase.match(/[\$\£\€](\d+(?:\.\d{1,2})?)/g)[0].replace(/\$/,"");
		purchaseText.link = purchase.match(/([http]?[s:]\/\/[^\s]+)/g); 
		purchaseText.qty = purchase.match(/[\s](\d+?)/g);

	console.log(`Data sent in => $${purchaseText.dollarAmount} ${purchaseText.link} ${purchaseText.qty}`);
	return purchaseText;
}