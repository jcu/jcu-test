
import React from 'react'
import styled from 'styled-components'

import { Box } from 'grommet'

// ----------------------------------------------------
function AppWidthBox(props) {
	let {children, width, direction, align, alignContent, justify, gap, height, ...otherProps} = props

	// default width provided in defaultProps below.

	if (width === 'max') {
		width = '100%'
	}
	if (height === "max") {
		height = '100%'
	}

	var DimWrapper = styled.div`
		width: 100%;
		max-width: ${width};
		margin: 0 auto;
		height: 100%;
		max-height: ${height};
	`

	return (
		<Box {...otherProps} height={height}>
			<DimWrapper>
				<Box fill direction={direction} align={align} alignContent={alignContent} justify={justify} gap={gap}>
					{children}
				</Box>
			</DimWrapper>
		</Box>
	)
}
// ----------------------------------------------------
AppWidthBox.defaultProps = {
	width: '925px',
	direction: 'column',
	pad: { vertical: "none", horizontal: "0.5rem" }
}
// ----------------------------------------------------
export default AppWidthBox

