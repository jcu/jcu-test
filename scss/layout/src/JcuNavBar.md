

`<JcuNavBar>` provides a horizontal navigation bar.  Provide the links as children inside the JcuNavBar.

```jsx
import AppConfigContext from './context/AppConfigContext'
import theme from './themes/jcu'
import { Grommet } from 'grommet'
import config from './config/config'
import { NavLink as Link, Route, BrowserRouter as Router } from 'react-router-dom'

const linkStyle = {
      color: "#424242", 
      textDecoration: 'none'
    }
;<AppConfigContext.Provider value={config}><Router><Grommet theme={theme}>

    <JcuNavBar>
        <Link to="#" style={linkStyle}>Recent</Link>
        <Link to="#" style={linkStyle}>Overview</Link>
        <Link to="#" style={linkStyle}>About</Link>
    </JcuNavBar>

</Grommet></Router></AppConfigContext.Provider>

```

### Future features

**properly style links.** Developers shouldn't need to supply link styling.