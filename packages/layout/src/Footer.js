import React from 'react'

import { Anchor, Box, Paragraph } from 'grommet'
import {FooterTitleLink, FooterSubLink, LegalFooterLink, LegalFooterSpacer, TraditionalFooterImage, MembershipFooterImage} from './FooterStyledComponents'

import AppWidthBox from './AppWidthBox'
import SeparatedLayout from './SeparatedLayout'

import AppConfigContext from './context/AppConfigContext'

const footerContent = {
    traditional: {
        fnImage: {
            link: "https://www.jcu.edu.au/ierc/home",
            image: "https://www.jcu.edu.au/__data/assets/file/0012/694569/aboriginal-flag.svg",
            alt: "Aboriginal flag"
        },
        tsImage: {
            link: "https://www.jcu.edu.au/ierc/home",
            image: "https://www.jcu.edu.au/__data/assets/file/0005/694571/torres-strait.svg",
            alt: "Torres Strait flag"
        },
        acknowledgement: "We acknowledge Australian Aboriginal People and Torres Strait Islander People as the first inhabitants of the nation, and acknowledge Traditional Owners of the lands where our staff and students live, learn and work."
    },
    memberships: [
        {
            link: "http://www.studyinaustralia.gov.au/global/why-australia",
            image: "https://www.jcu.edu.au/__data/assets/file/0011/694577/australia-future-unlimited.svg",
            alt: "Future Unlimited"
        },
        {
            link: "http://www.iru.edu.au/",
            image: "https://www.jcu.edu.au/__data/assets/file/0012/694578/innovative-research-universities.svg",
            alt: "Innovative Research Universities Australia"
        },
        {
            link: "https://www.universitiesaustralia.edu.au/",
            image: "https://www.jcu.edu.au/__data/assets/file/0005/694580/universities-australia-2018-blue.svg",
            alt: "Universities Australia"
        },
        {
            link: "http://stateofthetropics.org",
            image: "https://www.jcu.edu.au/__data/assets/file/0004/694579/SOTT3.svg",
            alt: "State of the Tropics"
        }
    ],
    copyright: ["Copyright © 1995 to 2018.", "James Cook University. All rights reserved.", "ABN 46253211955"],
    legal: [
        {
            text: "Feedback",
            link: "https://secure.jcu.edu.au/app/feedback/",
            alt: ""
        },
        {
            text: "Terms of Use",
            link: "https://www.jcu.edu.au/copyright-and-terms-of-use",
            alt: ""
        },
        {
            text: "Right to Information and Privacy",
            link: "https://www.jcu.edu.au/right-to-information-and-privacy",
            alt: ""
        },
        {
            text: "CRICOS Provider Code: 00117J",
            link: "http://cricos.education.gov.au/Institution/InstitutionDetails.aspx?ProviderID=117",
            alt: ""
        }
    ]
}

function FooterColumn(props) {
    return (<Box direction='column' pad="small" align="start">{props.children}</Box>)
}

function FooterInstitutionLinks(props) {
    if (props.data) {
        return (
            <Box wrap={true} direction='row' justify="between" margin={{ vertical: "small" }}>
                {props.data.map((family, familyIndex) => {
                    return (
                        <FooterColumn key={familyIndex.toString()}>
                            <FooterTitleLink href={family.url} primary label={family.label} margin={{ bottom: "small" }} />
                            {family.children.map((child, childIndex) => {
                                return (
                                    <FooterSubLink key={childIndex.toString()} href={child.url} label={child.label} />
                                )
                            })}
                        </FooterColumn>
                    )
                })}
            </Box>
        )
    }
    else {
        return null
    }
}

function LegalFooter(props) {

    let spacer = <LegalFooterSpacer>|</LegalFooterSpacer>
    return (
        <SeparatedLayout 
            separator={spacer} 
            direction="row" align="center" justify="evenly" margin="small" wrap={true}>
            {props.legal.map(linkObj => {
                return <LegalFooterLink href={linkObj.link} primary label={linkObj.text} alt={linkObj.alt} key=""/>
            })}
        </SeparatedLayout>
    ) 

}

function MembershipFooter({ membership }) {
    return (
        <Box direction="row" gap="xsmall" align="center" justify="between" margin={{ vertical: "small" }}>
            {membership.map((imageDetails, index) => {
                return (
                    <Anchor key={"_" + index} href={imageDetails.link}>
                        <MembershipFooterImage src={imageDetails.image} alt={imageDetails.alt} />
                    </Anchor>
                )
            })}
        </Box>
    )
}

function TraditionalFooter({ fnImage, tsImage, acknowledgement }) {
    return (
        <Box direction="row" gap="small" align="center" margin={{ vertical: "small" }}>
            <Box basis="50px" flex={false}>
                <Anchor href={fnImage.link}>
                    <TraditionalFooterImage src={fnImage.image} alt={fnImage.alt} fit="contain" />
                </Anchor>
            </Box>
            <Paragraph size="footer"> {acknowledgement}</Paragraph>
            <Box basis="50px" flex={false}>
                <Anchor href={tsImage.link}>
                    <TraditionalFooterImage src={tsImage.image} alt={fnImage.alt} fit="contain" />
                </Anchor>
            </Box>
        </Box>
    )

}

function CopyrightFooter({ copyright }) {
    return (
        <Box direction="row" justify="center" wrap={true}>
            {copyright.map((text, index) => {
                return (<Paragraph key={index.toString()} margin={{ horizontal: "1em", vertical: "0" }} size="footer">{text}</Paragraph>)
            })}
        </Box>
    )
}

class Footer extends React.Component {

    static contextType = AppConfigContext

    render() {

        let institutionLinks = null
        if (this.context.footer && this.context.footer.institution_links) {
            institutionLinks = <AppWidthBox background='grey-1'><FooterInstitutionLinks data={this.context.footer.institution_links} /></AppWidthBox>
        }
        
        return (<>
            {institutionLinks}
            <AppWidthBox background='grey-1' width="630px">
                <TraditionalFooter {...footerContent.traditional} />
                <MembershipFooter membership={footerContent.memberships} />
                <CopyrightFooter copyright={footerContent.copyright} />
                <LegalFooter legal={footerContent.legal} />
            </AppWidthBox>
        </>
        )
    }
}

export default Footer


