import React from 'react'
import {PropTypes} from 'prop-types'

import JcuDateTime from './JcuDateTime'

class JcuTime extends React.Component {
    static propTypes = {
        /** the point-in-time to be displayed */
        dateTime: PropTypes.string,
        /** if true, prevents the displayed time from updating as time passes */
        static: PropTypes.bool,
        /** format used by the `time` prop. If not specified, will attempt some common formats. */
        inputFormat: PropTypes.string,
        /** format for displayed time */
        outputFormat: PropTypes.string,
        /** if true, show time-ago or time-until, rather than the moment itself */
        relative: PropTypes.bool
    }

    static defaultProps = {
        static: false,
        time: false,
        inputFormat: false,
        outputFormat: 'h:mma',
        relative: false
    }

    render() {
        return(
            <JcuDateTime 
                static={this.props.static}
                dateTime={this.props.time}
                inputFormat={this.props.inputFormat}
                outputFormat={this.props.outputFormat}
                relative={this.props.relative}
                />
        )
    }
}

export default JcuTime