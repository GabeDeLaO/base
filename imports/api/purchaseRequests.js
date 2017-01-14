import { Mongo } from 'meteor/mongo';

export const PurchaseRequests = new Mongo.Collection('purchaseRequests');

export const TextParser = (purchase) => {
	let dollarAmount = purchase.match(/[\$\£\€](\d+(?:\.\d{1,2})?)/g);
	let link = purchase.match(/([http]?[s:]\/\/[^\s]+)/g); 
	let qty = purchase.match(/[\s](\d+?)/g);
	return `Data sent in => ${dollarAmount} ${link} ${qty}`;	
}