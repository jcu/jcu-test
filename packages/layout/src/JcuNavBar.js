import React from 'react'

import { Box } from 'grommet'

import AppWidthBox from './AppWidthBox'


function JcuNavBar(props) {
	let {children} = props

	return (
		<AppWidthBox background="grey-1">
			<Box direction="row" gap="large"  margin={{"vertical": 'xsmall'}}>
				{children}
			</Box>
		</AppWidthBox>
	)
}

export default JcuNavBar
