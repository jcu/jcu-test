JcuEnvironmentBanner component gives you a banner according to the server (config).  


```jsx
import AppConfigContext from './context/AppConfigContext'
import theme from './themes/jcu'
import { Grommet, Text } from 'grommet'
import config from './config/config'

;<AppConfigContext.Provider value={config}>
<Grommet theme={theme}>
     <JcuEnvironmentBanner />
</Grommet>
</AppConfigContext.Provider>

```

* options: 
<p>config.environment.type = 'test'</p>
<p>config.environment.name = 'TEST Environment'</P>