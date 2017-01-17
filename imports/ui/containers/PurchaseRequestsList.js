import { createContainer } from 'meteor/react-meteor-data';
import { PurchaseRequests } from '../../api/purchaseRequests/purchaseRequests.js';
import PurchaseRequestsList from '../components/PurchaseRequestsList.js';
import Loading from '../components/Loading.js';

export default createContainer(() => {
  return{
    purchases: PurchaseRequests.find({ isArchived: { $exists : false } }).fetch(),
  };
}, PurchaseRequestsList);