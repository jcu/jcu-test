import React from 'react'
import {PropTypes} from 'prop-types'

import moment from 'moment'

class JcuDateTime extends React.Component {

    static propTypes = {
        /** the point-in-time to be displayed */
        dateTime: PropTypes.string,
        /** if true, prevents the displayed moment from updating in real time */
        static: PropTypes.bool,
        /** format used by the `dateTime` prop. If not specified, will attempt some common formats. */
        inputFormat: PropTypes.string,
        /** format for displayed datetime */
        outputFormat: PropTypes.string,
        /** if true, show time-ago or time-until, rather than the moment itself */
        relative: PropTypes.bool
    }

    static defaultProps = {
        dateTime: null,
        static: false,
        inputFormat: null,
        outputFormat: 'D MMM YYYY h:mma',
        relative: false
    }

    constructor(props) {
        super(props)
        // we only need live updates if:
        // - we're showing the current time and they didn't say static
        // - we're showing a relative time and they didn't say static
        if (!props.static && ( (props.relative && props.dateTime) || (!props.relative && !props.dateTime) )) {
            setInterval(()=> this.forceUpdate(), 500)
        }
    }

    render() {
        const dateTime = this.props.dateTime ? new moment(this.props.dateTime, this.props.inputFormat) : new moment()
        const relative = this.props.dateTime ? new moment(this.props.dateTime, this.props.inputFormat).fromNow() : 'now'

        const nonrelative =<>{ dateTime.format(this.props.outputFormat)}</>

        return ( this.props.relative ? relative : nonrelative )
    }
}

export default JcuDateTime