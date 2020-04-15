import React from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native';

const Animation = ({ width, duration }) => {
    const [x,setX] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
        animate();
    })

    const animate = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    x,
                    {
                      toValue: width - 25,
                      useNativeDriver:false,
                      duration,
                      easing: Easing.linear,
                    }
                  ),
                  Animated.timing(
                    x,
                    {
                      toValue: 0,
                      useNativeDriver:false,
                      duration:0,
                      easing: Easing.linear,
                    }
                  ),
            ])
        ).start();
    }

    return(
        <Animated.View style={[styles.animatedView,{ left:x }]} >
            <View style={styles.smallLine} />
            <View style={styles.line} />
            <View style={styles.smallLine} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    animatedView:{
        position:'absolute',
        height:'100%',
        flexDirection:'row',
        justifyContent:'center',
    },
    smallLine:{
        opacity:.1,
        width:5,
        backgroundColor:'#fff',
    },
    line:{
        opacity:.2,
        width:15,
        backgroundColor:'#fff',
    }
});

export default Animation;
