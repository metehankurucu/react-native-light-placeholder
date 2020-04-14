import React from 'react'
import { View } from 'react-native';

const Col = ({ children, ...props }) => (
    <View style={{flexDirection:'column',justifyContent:'center'}} {...props} >
        { children }
    </View>
)

export default Col;
