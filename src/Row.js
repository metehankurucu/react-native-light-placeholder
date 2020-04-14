import React from 'react'
import { View } from 'react-native';

const Row = ({ children, ...props }) => (
    <View style={[{flexDirection:'row'},props.style]}  >
        { children }
    </View>
)

Row.defaultProps = {
    style:{}
}

export default Row;
