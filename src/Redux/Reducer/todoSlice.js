import { createSlice } from '@reduxjs/toolkit'
import {Schema} from '../../model/schema';

const initialState = {
    todos: [],
    username: 'man'
}
const Realm = require('realm');



const databaseOptions = {
  path: 'realmT4.realm',
  schema: [Schema],
  schemaVersion: 1,
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        alerter:()=>{
            alert('show case')
        },
        deleteTodo: (state, action) => {

            let todoindex = state.todos.findIndex(x => x.title == action.payload.title)
            state.todos.splice(todoindex, 1)
        },
        editTodo: (state, action) => {
            let index = action.payload.id;
            state.todos[index] = action.payload.obj
        },
        selectTodo: (state, action) => {
            console.log('ticked')
            state.todos[action.payload].selected = !state.todos[action.payload].selected
        },
        deleteSelected: (state) => {
            state.todos = state.todos.filter(x => !x.selected)
        }
    }
})
export const getFromInside = () => async dispatch => {
    dispatch(alerter())
  };

export const { addTodo, deleteTodo, editTodo, selectTodo ,deleteSelected,alerter} = todoSlice.actions

export default todoSlice.reducer