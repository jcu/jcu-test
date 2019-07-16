import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'rsg-components/Styled'

const styles = ({ fontFamily, color }) => ({
  logo: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: "Open Sans,sans-serif"
  }
})

export function LogoRenderer ({ classes, children }) {
  return (
    <h1 className={classes.logo}>
      <img
        className='img-fluid center-block'
        src='../styleguide/components/JCU-Logo-HorizontalREV.png'
        alt='James Cook University'
        width = '150px'
      />
      <br />
      <br />
      {children}
    </h1>
  )
}

LogoRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default Styled(styles)(LogoRenderer)
