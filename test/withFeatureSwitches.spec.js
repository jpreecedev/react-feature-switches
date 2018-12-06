/* eslint-disable react/jsx-filename-extension */

import * as React from 'react'
import withFeatureSwitches from '../src/withFeatureSwitches'

describe('<WithFeatureSwitches/> tests', () => {
  const Component = <div />

  const getFeatures = () => {
    const Result = withFeatureSwitches(Component)
    const classInstance = new Result()
    const FeatureSwitchesComponent = classInstance.render()
    return FeatureSwitchesComponent.props.features
  }

  it('should have no features when features is null', () => {
    global.features = null
    const result = getFeatures()
    expect(result).toEqual(null)
  })

  it('should have no features when features is empty', () => {
    global.features = null
    const result = getFeatures()
    expect(result).toEqual(null)
  })

  it('should have one feature when features has one feature', () => {
    global.features = { first: true }
    const result = getFeatures()
    expect(result).toEqual({ first: true })
  })

  it('should have two features when features has two feature', () => {
    global.features = { first: true, second: false }
    const result = getFeatures()
    expect(result).toEqual({ first: true, second: false })
  })

  it('should have three features when features has three feature', () => {
    global.features = { first: true, second: false, third: true }
    const result = getFeatures()
    expect(result).toEqual({ first: true, second: false, third: true })
  })
})
