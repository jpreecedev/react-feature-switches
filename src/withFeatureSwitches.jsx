/* eslint-disable react/prefer-stateless-function */

import * as React from 'react'

const withFeatureSwitches = Component => {
  class WithFeatureSwitches extends React.Component {
    render() {
      return <Component features={global.features} />
    }
  }
  return WithFeatureSwitches
}

export default withFeatureSwitches
