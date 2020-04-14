import React from 'react'
import { View } from 'react-native';

const Circle = ({ diameter, color, ...props }) => {
    return (
        <View style={{
            position:'relative',
            height:diameter, 
            width:diameter,
            borderRadius:diameter/.5,
            backgroundColor:color,
            margin:3
        }} 
        {...props}
        />
    )
}

Circle.defaultProps = {
    diameter:90,
    color:'#ddd'
}

export default Circle;
