
`<Footer>` component gives you a footer area with all required links as per JCU marketing requirements.

```jsx
import AppConfigContext from './context/AppConfigContext'
import theme from './themes/jcu'
import { Grommet, Text } from 'grommet'
import config from './config/config'
;<AppConfigContext.Provider value={config}><Grommet theme={theme}>

<Footer />

</Grommet></AppConfigContext.Provider>

```
### Future Features:

**hide/show options.** Provide options to hide the various footer elements.  And/or possibly just `minimal` prop that just shows the legal stuff.