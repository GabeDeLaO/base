import { Bert } from 'meteor/themeteorchef:bert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routes.js';

Meteor.subscribe('purchaseRequests');

Bert.defaults.style = 'growl-top-right';
