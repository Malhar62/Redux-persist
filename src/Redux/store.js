import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import todoReducer from './Reducer/todoSlice'
import loginReducer from './Reducer/loginSlice'
import webReducer from './Reducer/webSlice'
import thunk from 'redux-thunk';
import { createRealmPersistStorage } from "@bankify/redux-persist-realm";
//const Realm = require('realm');

const persistConfig = {
    key: 'root',
    storage: createRealmPersistStorage()
};

const rootReducer = combineReducers({
    todo: todoReducer,
    login: loginReducer,
    web: webReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export default store;
