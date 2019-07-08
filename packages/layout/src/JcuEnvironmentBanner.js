import React from 'react'
import { Close } from 'grommet-icons'

import AppConfigContext from './context/AppConfigContext'
import AppWidthBox from './AppWidthBox'

import {
	Box,
	Heading,
	Markdown,
	Button,
} from 'grommet'

import styled from 'styled-components'

function Banner (props) {
	if (props.closed) {
		return null
	} else {
		return props.children
	}
}

const ColouredMarkdown = styled(Markdown)`
	color: rgba(255,255,255, 0.85);
	a { color: white }
`

class JcuEnvironmentBanner extends React.Component {

	static contextType = AppConfigContext

	constructor(props) {
		super(props)
		this.state = {
			hover: false,
			bannerOpen: false, 
		}
	  }

	render() {
		let banner = null
		let bannerContent = null
		let closeButton = null
        if (this.context.environment && this.context.environment.type) {
			// if we're in a prod-type environment, we don't show an env banner at all
			let description = `This application is running in the ${this.context.environment.name}.`
			if (this.context.environment.type !== 'prod') {
				description = description + ' It is not suitable for production use.'
			}
			description = this.context.environment.description || description
			if (this.state.bannerOpen){
				bannerContent = <Box pad={{bottom: 'medium'}}>
									{}
									<ColouredMarkdown>
										{description}
									</ColouredMarkdown>
								</Box>
				closeButton = <Box 
								margin={{ "vertical": 'small' }}
								alignSelf={"start"} 
								width={"30px"} 
								height={"30px"}>
								<Button onClick={() => this.setState({bannerOpen: false})}>
									<Close/>
								</Button>
							   </Box>
			} 
			banner = <Banner closed={this.context.environment.type === "prod"}>
						<AppWidthBox 
							onClick={() => {
								if (!this.state.bannerOpen) {
									this.setState({bannerOpen: true})
								}
							}}
							onMouseEnter={() => this.setState({hover: true})}
							onMouseLeave={() => this.setState({hover: false})}
							background={(this.state.hover && !this.state.bannerOpen) ? "brand-highlight" : "brand"}
							style={{cursor: !this.state.bannerOpen ? "pointer" : ""}}>
							<Box direction="row">
								<Box alignSelf="start" fill>
									<Heading 
										margin={{ vertical: "small" }} 
										style={{ color: "white", textDecoration: "none" }}
										level={this.state.bannerOpen ? "2" : "6"}>
										{this.context.environment.name}
									</Heading>
									{bannerContent}
								</Box>
								{closeButton}
							</Box>				
						</AppWidthBox>
					</Banner>
        }
        
        return (<>
            		{banner}
        		</>
        )
    }
}

export default JcuEnvironmentBanner