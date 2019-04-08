import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import consts from '../consts';

export function login(values) {
  return submit(value, `${consts.OAPI_URL}/login`)
};

export function singup(value) {
  return submit(value, `${consts.OAPI_URL}/singup`);
};

function submit(values, url) {
  return dispatch => {
    axios.post(url, values)
      .then(res => {
        dispatch([{ type: 'USER_FETCHED', payload: res.data }]);
      })
      .catch(err => {
        err.response.data.errors.forEach(error => toastr.error('Erro', error));
      });
  }
}

export function logout() {
  return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios.post(`${consts.OAPI_URL}/validateToken`, { token })
        .then(res => {
          dispatch({ type: 'TOKEN_VALIDATED', payload: res.data.valid });
        })
        .catch(err => {
          dispatch({ type: 'TOKEN_VALIDATED', payload: false });
        });
    } else {
      dispatch({ type: 'TOKEN_VALIDATED', payload: false });
    }
  };
}