import styled from 'styled-components'

import { Anchor, Image, Text } from 'grommet'

const FooterTitleLink = styled(Anchor)`
            font-weight: 100;
            font-size: 1.5rem;
            :hover {
                text-decoration: none;
            }
            color: black;
`

const FooterSubLink = styled(Anchor)`
            font-size: 0.875rem;
            color: black;
            font-weight: 100;
            :hover {
                text-decoration: underline;
            }
`

const LegalFooterLink = styled(Anchor)`
            font-size: 0.7rem;
            font-weight: bold;
            line-height: 1.4;
            color: #06c;
`

const LegalFooterSpacer = styled(Text)`
            font-size: 0.7rem;
            font-weight: bold;
            line-height: 1.4;
`

const TraditionalFooterImage = styled(Image)`
            min-height: 30px;
            min-width: 50px;
            width: 100%;
            max-height: 30px;
            max-width: 50px;
`

const MembershipFooterImage = styled(Image)`
            min-height: 30px;
            min-width: 50px;
            width: 100%;
            height: 100%;
            max-height: 65px;
            max-width: 110px;
`

export { FooterTitleLink, FooterSubLink, LegalFooterLink, LegalFooterSpacer, TraditionalFooterImage, MembershipFooterImage }