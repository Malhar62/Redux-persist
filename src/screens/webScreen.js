import React from "react";
import { View, Text, FlatList, SafeAreaView, Button } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { getCallResponse } from "../Redux/Reducer/webSlice";
import { getApiCall } from "../WebServices";

export default function WebScreen() {

    const dispatch = useDispatch()
    const answer = useSelector(state => state.web.lists)
    return (
        <SafeAreaView>
            <Button
                title='getData'
                onPress={() => {
                    getApiCall('https://jsonplaceholder.typicode.com/posts/1')
                        .then(res => {
                            console.log(res)
                            dispatch(getCallResponse(res))
                        })
                }}
            />
            <FlatList
                data={answer}
                renderItem={({ item, index }) => (
                    <View style={{marginTop:5,borderBottomWidth:1}}>
                        <Text>{item.title}</Text>
                    </View>
                )}
                keyExtractor={index => index + Math.random()}
            />
        </SafeAreaView>
    )
}