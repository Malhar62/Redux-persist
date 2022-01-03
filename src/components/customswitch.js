
import React from 'react';
import { View, Text, SafeAreaView, Button, Animated, TouchableOpacity, Easing } from 'react-native';

const CustomSwitch = ({ check, styleOuter, styleInner, onToggle }) => {

    var base_width = 60;
    var base_height = 32;

    function Ranger(){

    }

    const anime = new Animated.Value(0)
    React.useEffect(() => {
        Animated.timing(anime, {
            toValue: check ? 0 : 1,
            duration: 500,
            useNativeDriver: false,
        }).start()
    }, [check])
    

    const travel = anime.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 28]
    })

    return (
        <TouchableOpacity onPress={() => {
            onToggle()
        }}>
            <View style={[{ width: base_width, height: base_height, borderRadius: 20, backgroundColor: 'blue', overflow: 'hidden', justifyContent: 'center' }, styleOuter]}>
                <Animated.View
                    style={[{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: !check ? '#fff' : '#e1f2e6',
                        transform: [{
                            translateX: travel
                        }]
                    }, styleInner]}
                />
            </View>
        </TouchableOpacity>
    )
}
export default CustomSwitch;