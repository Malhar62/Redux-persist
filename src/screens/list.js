import React from 'react';
import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import SimpleInput from '../components/simpleinput';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, editTodo, selectTodo,deleteSelected } from '../Redux/Reducer/todoSlice';
import moment from 'moment';
import Detail from '../components/detail';
import { Schema } from '../model/schema';
export default function List() {

    const [text, setText] = React.useState('')
    const [flag, setFlag] = React.useState(false)
    const [current, setCurrent] = React.useState(null)
    const todolist = useSelector(state => state.todo.todos)
    const username = useSelector(state => state.login)
    const textinputRef = React.createRef()
    const dispatch = useDispatch()

    const databaseOptions = {
        path: 'realmT4.realm',
        schema: [Schema],
        schemaVersion: 1,
    };
    function getting() {
        Realm.open(databaseOptions).then((realm) => {
            const res = realm.objects('posts');
            console.log(res)
        });
    }

    const  renderTodo=({ item, index }) =>{
        return (
            <Detail
                item={item}
                index={index}
                onDelete={data => dispatch(deleteTodo(data))}
                flag={flag}
                isAnySelected={Checker()}
                onEdit={(data, id) => {
                    setFlag(true)
                    setText(data.title)
                    setCurrent(id)
                    textinputRef.current.focus()
                }}
                onSelect={(id) => dispatch(selectTodo(id))}
            />
        )
    }
    function Checker() {
        var count = 0;
        todolist.forEach(element => {
            if (element.selected) {
                count++
            }
        });
        if (count == 0) {
            return false;
        } else {
            return true;
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* <Button
            title='get'
            onPress={()=>{
                getting()
            }}
            /> */}
            {Checker() ?
                <TouchableOpacity 
                onPress={()=>dispatch(deleteSelected())}
                style={{ backgroundColor: '#6e98eb', borderRadius: 10, margin: 10,height:60, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Delete selected</Text>
                </TouchableOpacity>
                :
                <SimpleInput
                    value={text}
                    ref={textinputRef}
                    onChange={data => setText(data)}
                    placeholder='Enter here...'
                    right={flag ? 'data:image/png;base64,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' : 'https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png'}
                    rightpress={() => {
                        let obj = {
                            title: text,
                            time: moment(new Date()).format("DD-MM-YYYY hh:mm a"),
                            selected: false
                        }
                        if (!flag) {
                            if (text != '') {
                                dispatch(addTodo(obj))
                            } else {
                                alert('enter name')
                            }
                        } else {
                            if (text != '') {
                                dispatch(editTodo({ obj, id: current }))
                            } else {
                                alert('enter name')
                            }
                        }
                        setText('')
                        setFlag(false)
                        setCurrent(null)
                        textinputRef.current.blur()
                       // getting()
                    }}
                />}
            <FlatList
                data={todolist}
                renderItem={renderTodo}
                keyExtractor={index => index + Math.random()}
                ListEmptyComponent={()=>(
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text>Nothing To Show</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}