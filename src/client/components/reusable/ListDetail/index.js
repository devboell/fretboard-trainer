import React from 'react'
import pt from 'prop-types'
import { Query } from 'react-apollo'

import ConnectedListDetail from './ConnectedListDetail'


const ListDetail = ({
  query,
  name,
  stateSlice,
  children,
}) =>
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>

      return (
        <ConnectedListDetail items={data[name]} stateSlice={stateSlice}>
          {children}
        </ConnectedListDetail>)
      }
    }
  </Query>

ListDetail.propTypes = {
  query: pt.shape({}).isRequired,
  name: pt.string.isRequired,
  stateSlice: pt.string.isRequired,
  children: pt.node.isRequired,
}

export {
  default as reducer,
  ITEM_SELECTION,
  CLEAR_SELECTION,
} from './ConnectedListDetail/reducer'
export default ListDetail
