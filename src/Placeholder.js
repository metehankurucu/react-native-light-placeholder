import React from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Animation from './Animation';

const { width } = Dimensions.get('window');

const Placeholder = ({ visible, animated, number, duration, children, ...props}) => {

    if(!visible){
        return null;
    }

    const iteration = Array(number).fill(1);

    return (
        <View {...props}>
            { iteration.map(() => children) }
            { animated && <Animation duration={duration} width={width} /> }
        </View>
    )
}

Placeholder.propTypes = {
    visible:PropTypes.bool.isRequired,
    animated:PropTypes.bool,
    duration:PropTypes.number,
    number:PropTypes.number
}

Placeholder.defaultProps = {
    visible:false,
    animated:true,
    duration:800,
    number:1,
    children:null
}

export default Placeholder;
