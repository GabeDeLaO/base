import { Mongo } from 'meteor/mongo';
//import { SimpleSchema } from 'meteor/aldeed:simple-schema';
//import { Factory } from 'meteor/dburles:factory';

export const PurchaseRequests = new Mongo.Collection('purchaseRequests');

PurchaseRequests.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
/*
PurchaseRequests.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
*/
export const TextParser = (purchase) => {
	
	let purchaseText = {};
		purchaseText.dollarAmount = purchase.match(/[\$\£\€](\d+(?:\.\d{1,2})?)/g)[0].replace(/\$/,"");
		purchaseText.link = purchase.match(/([http|https]+?[:]\/\/[^\s]+)/g)[0]; 
		purchaseText.qty = purchase.match(/[\s](\d+?)/g)[0];

	console.log(`Data sent in => $${purchaseText.dollarAmount} ${purchaseText.link} ${purchaseText.qty}`);
	return purchaseText;
}