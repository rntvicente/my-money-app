import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducer from '../dashboard/dashboard-reducer';
import TabReducer from '../common/tab/tab-reducer';
import BillingCycleReducer from '../billingCycle/billingCycle-reducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tabHeader: TabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;