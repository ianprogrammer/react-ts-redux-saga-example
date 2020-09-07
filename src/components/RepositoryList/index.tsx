import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { StoreState } from '../../store/createStore'
import { RepositoriesState } from '../../store/modules/repositories/types'
import * as RepositoryActions from '../../store/modules/repositories/actions'
import './styles.css'
import RepositoryItem from '../RepositoryItem'
interface StateProps {
  repositories: RepositoriesState
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

class RespositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props

    loadRequest()
  }

  render() {
    const { repositories } = this.props
    const { data } = repositories
    return (
      <>
        <h1>GitHub repo cards</h1>
        <div className="github-cards">
          {data.map((r) => (
            <RepositoryItem
              key={r.id}
              name={r.name}
              description={''}
              link={r.svn_url}
              language={r.language}
            ></RepositoryItem>
          ))}
        </div>
      </>
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  repositories: state.repositoryState
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoryActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RespositoryList)
