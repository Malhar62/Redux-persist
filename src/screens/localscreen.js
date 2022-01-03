import React from 'react'
import { SafeAreaView, Text, Button, TextInput } from "react-native";
import { alerter, getFromInside } from '../Redux/Reducer/todoSlice';
import store from '../Redux/store';
import strings from '../services/translation';

export default function LocalScreen() {
    const [change, setChange] = React.useState('english')
    const [name, setName] = React.useState('')
    function changer(value) {
        setChange(value)
        strings.setLanguage(value)
    }

    var data=store.getState().todo.username
    return (
        <SafeAreaView>
            <Text>{data}</Text>
            <Text style={{ textAlign: change == 'arab' ? 'right' : 'left' }}>{strings.no}</Text>
            <TextInput
                value={name}
                onChangeText={data => setName(data)}
                textAlign={change == 'arab' ? 'right' : 'left'}
                style={{ borderWidth: 1 }}
            />
            <Button
                title='english'
                onPress={() => store.dispatch(getFromInside())}
            />
            <Button
                title='hindi'
                onPress={() => { changer('hind') }}
            />
            <Button
                title='arabic'
                onPress={() => { changer('arab') }}
            />
        </SafeAreaView>
    )
}