import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import { reset as resetForm } from 'redux-form';

import { showTabs, selectTab } from '../common/tab/tab-actions';

const url = 'http://localhost:3000/api/billingCycles';

export function getList() {
  return {
    type: 'BILLING_CYCLE_FETCHED',
    payload: axios.get(url)
  }
}

export function create(values) {
  return dispatch => {
    axios.post(url, values)
      .then(response => {
        toastr.success('Success', 'Operation performed successfully.');

        dispatch([
          resetForm('billingcycleForm'),
          getList(),
          selectTab('tabList'),
          showTabs('tabList', 'tabCreate')
        ]);
      })
      .catch(error => {
        error.response.data.errors.forEach(elem => {
          toastr.error('Error', elem)
        });
      });
  };
}
