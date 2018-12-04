/* eslint-disable no-cond-assign */

const parse = collection =>
  Object.keys(collection)
    .map(key => ({ [key]: JSON.parse(collection[key]) }))
    .reduce((acc, item) => ({ ...acc, ...item }), {})

const getQueryParams = query => {
  const qs = query.split('+').join(' ')

  const params = {}
  const re = /[?&]?([^=]+)=([^&]*)/g

  let tokens

  while ((tokens = re.exec(qs))) {
    params[decodeURIComponent(tokens[1])] = JSON.parse(decodeURIComponent(tokens[2]))
  }

  return params
}

const getOverrides = req => ({
  queryString: req.url ? parse(getQueryParams(req.url.replace('/?', ''))) : {},
  cookies: req.cookies ? parse(req.cookies) : {}
})

export default getOverrides
