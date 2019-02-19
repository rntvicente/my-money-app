import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';

import { showTabs, selectTab } from '../common/tab/tab-actions';

const INITIAL_VALUES = {};
const url = 'http://localhost:3000/api/billingCycles';

export function getList() {
  return {
    type: 'BILLING_CYCLE_FETCHED',
    payload: axios.get(url)
  }
}

export function create(values) {
  return submit(values, 'post');
}

export function update(values) {
  return submit(values, 'put');
}

const submit = (values, method) => {
  const id = values._id ? values._id : '';

  axios[method](`${url}/${id}`, values)
    .then(response => {
      toastr.success('Success', 'Operation performed successfully.');
      dispatch(init());
    })
    .catch(error => {
      error.response.data.errors.forEach(elem => {
        toastr.error('Error', elem)
      });
    });
};

export function showTab(tabId, billingCycles) {
  return [
    showTabs(tabId),
    selectTab(tabId),
    initialize('billingcycleForm', billingCycles)
  ];
}

export function init() {
  return [
    resetForm('billingcycleForm'),
    getList(),
    selectTab('tabList'),
    showTabs('tabList', 'tabCreate'),
    initialize('billingcycleForm', INITIAL_VALUES)
  ];
}