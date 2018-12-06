import getOverrides from '../src/features'

describe('Features spec', () => {
  it('should return empty override object when request is empty', () => {
    const expectedResult = {
      cookies: {},
      queryString: {}
    }
    const result = getOverrides({})
    expect(result).toEqual(expectedResult)
  })
  it('should return empty override object when request contains no query string', () => {
    const expectedResult = {
      cookies: {},
      queryString: {}
    }
    const result = getOverrides({ url: '' })
    expect(result).toEqual(expectedResult)
  })
  it('should return a single feature switch when one is provided on the query string', () => {
    const expectedResult = {
      cookies: {},
      queryString: {
        first: true
      }
    }
    const result = getOverrides({ url: '?first=true' })
    expect(result).toEqual(expectedResult)
  })
  it('should return two feature switches when two are provided on the query string', () => {
    const expectedResult = {
      cookies: {},
      queryString: {
        first: true,
        second: false
      }
    }
    const result = getOverrides({ url: '?first=true&second=false' })
    expect(result).toEqual(expectedResult)
  })
  it('should return three feature switches when three are provided on the query string', () => {
    const expectedResult = {
      cookies: {},
      queryString: {
        first: true,
        second: false,
        third: true
      }
    }
    const result = getOverrides({ url: '?first=true&second=false&third=true' })
    expect(result).toEqual(expectedResult)
  })
  it('should return a single feature switch when one is provided in cookies', () => {
    const expectedResult = {
      cookies: { first: true },
      queryString: {}
    }
    const result = getOverrides({ cookies: { first: true } })
    expect(result).toEqual(expectedResult)
  })
  it('should return two feature switches when two are provided in cookies', () => {
    const expectedResult = {
      cookies: { first: true, second: false },
      queryString: {}
    }
    const result = getOverrides({ cookies: { first: true, second: false } })
    expect(result).toEqual(expectedResult)
  })
  it('should return three feature switches when three are provided in cookies', () => {
    const expectedResult = {
      cookies: { first: true, second: false, third: true },
      queryString: {}
    }
    const result = getOverrides({ cookies: { first: true, second: false, third: true } })
    expect(result).toEqual(expectedResult)
  })
  it('should return both queryString and cookies overrides when both are supplied for one switch', () => {
    const expectedResult = {
      cookies: { first: true },
      queryString: { first: true }
    }
    const result = getOverrides({
      cookies: { first: true },
      url: '?first=true'
    })
    expect(result).toEqual(expectedResult)
  })
  it('should return both queryString and cookies overrides when both are supplied for two switches', () => {
    const expectedResult = {
      cookies: { first: true, second: false },
      queryString: { first: true, second: false }
    }
    const result = getOverrides({
      cookies: { first: true, second: false },
      url: '?first=true&second=false'
    })
    expect(result).toEqual(expectedResult)
  })
  it('should return both queryString and cookies overrides when both are supplied for three switches', () => {
    const expectedResult = {
      cookies: { first: true, second: false, third: true },
      queryString: { first: true, second: false, third: true }
    }
    const result = getOverrides({
      cookies: { first: true, second: false, third: true },
      url: '?first=true&second=false&third=true'
    })
    expect(result).toEqual(expectedResult)
  })
})
