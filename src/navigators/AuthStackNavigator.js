import React from 'react';
import {
    StyleSheet,
} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";


const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}} mode={'modal'}>
            <AuthStack.Screen name={'Login'} component={LoginScreen}/>
            <AuthStack.Screen name={'Register'} component={RegisterScreen}/>
        </AuthStack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
