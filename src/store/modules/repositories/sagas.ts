import { takeLatest, call, put, all } from 'redux-saga/effects'
import { api } from '../../../services/api'
import * as actions from './actions'
import { RepositoriesTypes } from './types'

export function* loadRequest() {
  try {
    const response = yield call(api.get, 'users/ianprogrammer/repos')
    // console.log(data)
    yield put(actions.loadSuccess(response.data))
  } catch (err) {
    console.log(err)
    yield put(actions.loadFailure())
  }
}

export default all([takeLatest(RepositoriesTypes.LOAD_REQUEST, loadRequest)])
