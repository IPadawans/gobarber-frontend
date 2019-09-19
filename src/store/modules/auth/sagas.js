import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  console.tron.log(response.data);
  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('usuario nao e prestador');
  }

  yield put(signInSuccess(token, user));
  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
