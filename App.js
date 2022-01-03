/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './src/screens/list';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import store from './src/Redux/store'
import LoginScreen from './src/screens/loginscreen';
import { useSelector, useDispatch } from 'react-redux'
import WebScreen from './src/screens/webScreen';
import { logOutUser } from './src/Redux/Reducer/loginSlice';
import { useTranslation } from 'react-i18next';

import i18n from "./src/services/i18n";
import LocalScreen from './src/screens/localscreen';
const initI18n = i18n;

const Stack = createNativeStackNavigator()

const MainStack = () => {
  const { t, i18n } = useTranslation();
  const { username, isLogin } = useSelector(state => state.login)
  const dispatch = useDispatch()
  return (
    <NavigationContainer>

      {/* <Stack.Screen name='webscreen' component={WebScreen}/> */}
      {isLogin ? <AppStack /> : <AuthStack />}

    </NavigationContainer>
  );
};
const AuthStack = () => {
  const { t, i18n } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{}}
    >
      <Stack.Screen name='loginscreen' >
        {props=><LoginScreen screenProps={{t, i18n}} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}
const AppStack = () => {
  const { t, i18n } = useTranslation();
  const { username, isLogin } = useSelector(state => state.login)
  const dispatch = useDispatch()
  return (
    <Stack.Navigator>
      
      <Stack.Screen name='list' component={List}
        options={{
          title: `Welcome ${username}`,
          headerRight: () => (
            <Button
              onPress={() => dispatch(logOutUser())}
              title="logout"
              color="navy"
            />
          ),
        }} />
        <Stack.Screen name='localscreen' component={LocalScreen}/>
    </Stack.Navigator>
  )
}

const App = () => {

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={true} persistor={persistor}>
        <MainStack />
      </PersistGate>
    </Provider>
  )
}

export default App;