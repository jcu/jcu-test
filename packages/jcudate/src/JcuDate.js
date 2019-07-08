import React from 'react'
import {PropTypes} from 'prop-types'

import JcuDateTime from './JcuDateTime'

class JcuDate extends React.Component {

    static propTypes = {
        /** the date to be displayed */
        date: PropTypes.string,
        /** prevent date from updating in real time */
        static: PropTypes.bool,
        /** format for the `date` prop */
        inputFormat: PropTypes.string,
        /** format for displayed date */
        outputFormat: PropTypes.string,
        /** show time-ago or time-until, rather than the date itself */
        relative: PropTypes.bool
    }

    static defaultProps = {
        date: null,
        static: false,
        inputFormat: 'YYYY-MM-DD',
        outputFormat: 'DD MMM YYYY',
        relative: false
    }


    render() {
        return(
            <JcuDateTime 
                static={this.props.static}
                dateTime={this.props.date}
                inputFormat={this.props.inputFormat}
                outputFormat={this.props.outputFormat}
                relative={this.props.relative}
                />
        )
    }
}

export default JcuDate