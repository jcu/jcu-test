Footer component gives you a footer area with all required links as per marketing requirements.  


```jsx
import AppConfigContext from './context/AppConfigContext'
import theme from './themes/jcu'
import { Grommet, Text } from 'grommet'
import config from './config/config'

;<AppConfigContext.Provider value={config}>
<Grommet theme={theme}>
    <Footer />
</Grommet>
</AppConfigContext.Provider>

```
Feature Developents:
* Provide options for Footer Menu Links to display or not