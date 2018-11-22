import { combineReducers } from 'redux';

import DashboardReducer from '../dashboard/dashboard-reducer';
import TabReducer from '../common/tab/tab-header';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tabHeader: TabReducer
});

export default rootReducer;