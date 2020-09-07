import { combineReducers } from 'redux'

import { StoreState } from '../createStore'

import repositoryState from './repositories'

export default combineReducers<StoreState>({
  repositoryState
})
