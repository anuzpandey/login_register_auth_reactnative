import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from 'axios';


import { AuthStackNavigator } from "./navigators/AuthStackNavigator";
import { MainStackNavigator } from "./navigators/MainStackNavigator";

import { lightTheme } from "./themes/light";
import { AuthContext } from "./context/AuthContext";
import { UserContext } from "./context/UserContext";
import { BASE_URL } from "./config/index";
import { sleep } from "./utils/sleep";
import { createAction } from "./utils/createAction";
import { useAuth } from "./hooks/useAuth";

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

export default function () {

    const {auth, state} = useAuth();

    return (
        <AuthContext.Provider value={auth}>
            <NavigationContainer theme={lightTheme}>
                <RootStack.Navigator screenOptions={{headerShown: false}}>
                    {
                        state.user ?
                            (
                                <RootStack.Screen name={'MainStack'}>
                                    {() => (
                                        <UserContext.Provider value={state.user}>
                                            <MainStackNavigator />
                                        </UserContext.Provider>
                                    )}
                                </RootStack.Screen>
                            ) :
                            <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}/>
                    }
                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}
