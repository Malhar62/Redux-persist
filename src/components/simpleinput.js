import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';


const SimpleInput = React.forwardRef((props, ref) => {

    const { value, placeholder, onChange, left, leftpress, right, rightpress, containorstyle } = props

    return (
        <View style={[styles.main, containorstyle]}>
            {left ? <TouchableOpacity onPress={leftpress}>
                <Image
                    source={{ uri: left }}
                    style={{ width: 40, height: 40 }}
                />
            </TouchableOpacity> : <View style={{ width: 40, height: 40 }} />}
            <TextInput
                value={value}
                ref={ref}
                onChangeText={data => onChange(data)}
                placeholder={placeholder}
                style={{ width: '70%' }}
            />
            {(value != '' && right) ? <TouchableOpacity onPress={rightpress}>
                <Image
                    source={{ uri: right }}
                    style={{ width: 40, height: 40 }}
                />
            </TouchableOpacity> : <View style={{ width: 40, height: 40 }} />}
        </View>
    )
})
export default SimpleInput;
const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        height: 60,
        margin: 10,
        paddingHorizontal: 5,
        alignItems: 'center'
    }
})