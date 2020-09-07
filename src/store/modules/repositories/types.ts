import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

export interface Repository {
  id: number
  name: string
  language: string
  svn_url: string
}

export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}

export type RepositoryAction = ActionType<typeof actions>
