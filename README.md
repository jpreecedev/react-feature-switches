# React Feature Switches

A simple Universal JavaScript feature switching library.

## Features

- Can turn a component on or off using the query string. I.e. `?firstComponent=true&secondComponent=false`
- Can turn a component on or off using a cookie
- Can turn features on/off using a your database, as switches are known server side (example not provided).
- Server side rendering supported

## Usage

Works with `express` and `cookie-parser` on the server side.

```javascript
// Import getOverrides helper function
import { getOverrides } from '@jpreecedev/react-feature-switches'

//Pass express request object
const overrides = getOverrides(req)

// Apply your features first (could be fetched from a database or elsewhere)
// Then override your switches with those from the query string & cookies
// Querystring will always override cookies and your defaults
global.features = {
  first: true,
  second: true,
  ...req.query,
  ...overrides.cookies,
  ...overrides.queryString
}
```

When rendering your markup, set `window.features` as follows, so the configuration can be passed from the server to the client;

```jsx
<script
  dangerouslySetInnerHTML={{
    __html: `window.features = ${JSON.stringify(global.features)};`
  }}
/>
```

Finally, in your React component, use the `withFeatureSwitches` higher order function to receive the feature configuration and use it to determine if to render the component, or not.

```jsx
import * as React from 'react'

import { withFeatureSwitches } from '@jpreecedev/react-feature-switches'
import First from '../First'
import Second from '../Second'

class Home extends React.Component {
  render() {
    const { features } = this.props

    return (
      <>
        <h1>A simple Universal JavaScript feature switch framework for React</h1>
        <ul>
          {features.first && <First />}
          {features.second && <Second />}
        </ul>
      </>
    )
  }
}

export default withFeatureSwitches(Home)
```
