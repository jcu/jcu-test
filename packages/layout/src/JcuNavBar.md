JcuNavBar component gives you a banner according to the server (config).  


```jsx
import AppConfigContext from './context/AppConfigContext'
import theme from './themes/jcu'
import { Grommet, Text } from 'grommet'
import config from './config/config'
import { NavLink as Link, Route, BrowserRouter as Router } from 'react-router-dom'

const linkStyle = {
      color: "#424242", 
      textDecoration: 'none'
    }
;<AppConfigContext.Provider value={config}>

 <Router><>
 <Grommet theme={theme}>
     <JcuNavBar>
                  <Link to="#" style={linkStyle}>Recent</Link>
                  <Link to="#" style={linkStyle}>Overview</Link>
                  <Link to="#" style={linkStyle}>About</Link>
                </JcuNavBar>
     </Grommet>
 </></Router>
</AppConfigContext.Provider>

```

