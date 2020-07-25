import React from 'react';
import {
    StyleSheet,
} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";

import { Dashboard } from "../screens/Dashboard";


const MainStack = createStackNavigator();

export function MainStackNavigator() {
    return (
        <MainStack.Navigator screenOptions={{headerShown: false}} mode={'modal'}>
            <MainStack.Screen name={'Dashboard'} component={Dashboard}/>
        </MainStack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
