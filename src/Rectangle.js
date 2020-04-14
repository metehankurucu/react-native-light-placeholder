import React from 'react'
import { View } from 'react-native';

const Rectangle = ({ height, width, color, square, borderRadius, ...props }) => {
    return (
        <View style={{
            height:height,
            width:square ? height : width,
            borderRadius,
            backgroundColor:color,
            margin:3
        }} 
        {...props}
        />
    )
}

Rectangle.defaultProps = {
    height:25,
    width:200,
    color:'#ddd',
    borderRadius:8
}

export default Rectangle;
