import React from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../containers/AppNavigation.js';
//import { createContainer } from 'meteor/react-meteor-data';
//import { PurchaseRequests } from '../../api/purchaseRequests/purchaseRequests.js';

export default App = ({ children }) => (
  <div>
    <AppNavigation />
    <Grid>
      { children }
    </Grid>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
  //purchases: React.PropTypes.array,
};

// export default createContainer(() => {
// 	return{
// 		purchases: PurchaseRequests.find({}).fetch(),
// 	};
// }, App);
