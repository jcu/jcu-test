

`<JcuEnvironmentBanner>` component gives you a banner describing the environment the application is running in. It starts minimised; the user can click it to see additional detail about the enviroment. If the environment is considered "prod" type, then the banner will not show.

This is the right way to advise the user that they're in testing, or staging, or some developer demo environment.

Your application configuration will generally supply all the settings required for this banner to do its job.

```jsx
import AppConfigContext from './context/AppConfigContext'
import theme from './themes/jcu'
import { Grommet } from 'grommet'

// config is normally supplied by the application configuration loading
const config = { environment: {
     type: 'non-prod',
     name: 'Test Environment',
     description: 'This is a test environment, you can do what you want'
}}
;<AppConfigContext.Provider value={config}><Grommet theme={theme}>

<JcuEnvironmentBanner />

</Grommet></AppConfigContext.Provider>
```

### Future features for JcuEnvironmentBanner

**allow override of open/closed default** The developer should be able to specify that the banner starts open or minimised, e.g. via a `open` prop.

**Start open, remember user's minimisation** It'd be cool to start open by default, and when the user clicks the close button, to remember that in a cookie or localStorage, so the next visit we stay minimised.
