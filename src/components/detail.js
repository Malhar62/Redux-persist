import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box'


const Detail=(props) =>{

    const { item, index, onDelete, onEdit, flag, onSelect, isAnySelected } = props;



    const removeIcon = 'https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/19-512.png'

    const editIcon = 'https://cdn-icons.flaticon.com/png/512/5996/premium/5996831.png?token=exp=1640691873~hmac=d32254eceaac602f12cabb862cd6543b'

    function ConvertDate(d) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
       var month=d.split('-')[1];
       return monthNames[month-1]
    }


    return (
        <View style={{ backgroundColor: '#f1f1f1', borderRadius: 8, padding: 5, margin: 10 }}>
            <View style={styles.main}>
                {!flag && <CheckBox
                    isChecked={item.selected}
                    onClick={() => onSelect(index)}
                />}
                <View style={{ width: '70%' }}>
                    <Text>
                        {item.title}
                    </Text>
                </View>
                {!isAnySelected ? <View style={{ flexDirection: 'row', width: '17%' }}>
                    <TouchableOpacity onPress={() => onDelete(item)}>
                        <Image
                            source={{ uri: flag ? null : removeIcon }}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onEdit(item, index)}>
                        <Image
                            source={{ uri: flag ? null : editIcon }}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </View> : <View style={{ width: '15%' }} />}
            </View>
            <Text style={{ textAlign: 'center' }}>{(item.time)}</Text>
        </View>
    )

}
export default Detail
const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 60,
    }
})