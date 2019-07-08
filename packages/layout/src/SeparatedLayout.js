import React from 'react'
import { Box } from 'grommet'
import { deepMerge } from 'grommet/utils/object';

function SeparatedLayout (props) {
    
    let {childList, childWrapper, children, separator, ...otherProps} = props
   
    let allChildren = (childList || []).concat(children || [])
    let contents = []
    let child

    for (var i = 0; i < allChildren.length; i++){
        if (props.childWrapper) {
            child = deepMerge(props.childWrapper, {props: {children: allChildren[i]}, key: (2*i).toString()})
        } else if (typeof allChildren[i] === "string") {
            child = allChildren[i]
        } else {
            child = deepMerge(allChildren[i], {key: (2*i).toString()})
        }
        contents.push(child)
        if (i !== allChildren.length - 1) {
            let separatorInstance = deepMerge(separator, {key: (2*i + 1).toString()})
            contents.push(separatorInstance)
        }
    } 

    return (
        <Box direction="row" align="center" gap="small" {...otherProps}>
            {contents}
        </Box>
    )

}

export default SeparatedLayout