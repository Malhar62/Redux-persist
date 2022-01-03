import React from 'react';
import { View, Text, SafeAreaView, Button, Animated, TouchableOpacity, Easing } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import CustomSwitch from '../components/customswitch';
import Header from '../components/Header';
import SimpleInput from '../components/simpleinput';
import { loginUser } from '../Redux/Reducer/loginSlice';
import * as RNLocalize from "react-native-localize";
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen(props) {
    const { t, i18n } = props.screenProps;
    const navigation = useNavigation()
    const logininfo = useSelector(state => state.login)
    const dispatch = useDispatch()
    const inputRef = React.useRef()
    const [name, setName] = React.useState('')
    const anime = new Animated.Value(0)
    const [check, setCheck] = React.useState(false)


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
                style={{
                    margin: 20,
                    fontSize: 20,
                }}>
                {t('Hey')} kk//Here I am passing the string to translator function
            </Text>
            <TouchableOpacity
                onPress={() => i18n.changeLanguage('de')} //Here I change the language to "de" German
            >
                <Text style={{ color:'red' }}>DE</Text>
            </TouchableOpacity>
            <Header
                headertxt='LOGIN'
                headerstyle={{ backgroundColor: 'pink', borderBottomWidth: 1, height: 60, marginBottom: 5 }}
                lefticon={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' }}
                righticon={require('../../android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png')}
                onleftpress={() => console.log(RNLocalize.findBestAvailableLanguage(["en", "fr"]))}
                onrightpress={() => alert('RIGHT')}
                textstyle={{ fontSize: 20 }}
            />
            <CustomSwitch
                check={check}
                // styleOuter={{width:100}}
                onToggle={() => setCheck(!check)}
            />
            <SimpleInput
                value={name}
                onChange={data => setName(data)}
                ref={inputRef}
                placeholder='enter your name...'
            />
            <Button
                title='login'
                onPress={() => {
                    if (name != '') {
                        dispatch(loginUser(name))
                        setName('')
                        // navigation.reset({
                        //     index:0,
                        //     routes:[{name:'list'}]
                        // })
                    }
                }}
            />
        </SafeAreaView>
    )
}