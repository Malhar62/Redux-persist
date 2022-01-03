import React from 'react';
import { View, Text, SafeAreaView, Button, Animated, TouchableOpacity, Image } from 'react-native';

export default function Header(props) {
    const { headertxt, lefticon, righticon, onleftpress, onrightpress, textstyle, headerstyle, iconstyle } = props


    return (
        <View style={[{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            alignItems: 'center',
            width:'100%'
        }, headerstyle]}>
            {lefticon ?
                <TouchableOpacity onPress={onleftpress}>
                    <Image
                        source={lefticon}
                        style={[iconstyle, { width: 30, height: 30 }]}
                    />
                </TouchableOpacity> : <View
                    style={{ width: 30, height: 30 }}
                />
            }
            <View>
                <Text style={[textstyle]}>{headertxt}</Text>
            </View>
            {righticon ?
                <TouchableOpacity onPress={onrightpress}>
                    <Image
                        source={righticon}
                        style={[iconstyle, { width: 30, height: 30 }]}
                    />
                </TouchableOpacity> : <View
                    style={{ width: 30, height: 30 }}
                />
            }
        </View>
    )
}