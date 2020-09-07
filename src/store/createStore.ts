import { createStore, applyMiddleware, Middleware, Reducer } from 'redux'
import {
  RepositoryAction,
  RepositoriesState
} from './modules/repositories/types'

export interface StoreState {
  repositoryState: RepositoriesState
}

export type StoreAction = RepositoryAction

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares)

  return createStore(reducers, enhancer)
}
