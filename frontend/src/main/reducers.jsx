import { combineReducers } from 'redux';

import DashboardReducer from '../dashboard/dashboard-reducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer
});

export default rootReducer;