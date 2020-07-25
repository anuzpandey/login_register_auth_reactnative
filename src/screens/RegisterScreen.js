import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { FilledButton } from "../components/FilledButton";
import { TextButton } from "../components/TextButton";
import { Error } from "../components/Error";
import { InputLabel } from "../components/InputLabel";
import { IconButton } from "../components/IconButton";
import { AuthContext } from "../context/AuthContext";
import { Loading } from "../components/Loading";

export function RegisterScreen({navigation}) {

    const {register} = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('anuz@gmail.com');
    const [password, setPassword] = React.useState('secret');
    const [confirmPassword, setConfirmPassword] = React.useState('secret');
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [confirmPasswordError, setConfirmPasswordError] = React.useState('');

    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <Heading style={[styles.title, {color: 'purple', marginBottom: 24}]}>REGISTER</Heading>

            <IconButton
                style={styles.closeIcon}
                name={'close-circle-outline'}
                onPress={() => {
                    navigation.navigate('Login')
                }}
            />

            <InputLabel label={'Email Address'}/>
            <Input
                style={styles.input}
                placeholder={'Email'}
                keyboardType={'email-address'}
                value={email}
                onChangeText={setEmail}
            />
            <Error error={emailError}/>

            <InputLabel label={'Password'}/>
            <Input
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Error error={passwordError}/>

            <InputLabel label={'Confirm Password'}/>
            <Input
                style={styles.input}
                placeholder={'Confirm Password'}
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Error error={confirmPasswordError}/>

            <Error error={error}/>
            <FilledButton
                title={'Register'}
                style={styles.loginBtn}
                onPress={async () => {
                    try {
                        setIsLoading(true);
                        await register(email, password);
                        navigation.pop();
                    } catch (e) {
                        console.log(e);
                        setError(e.message);
                        setIsLoading(false);
                    }
                }}
            />

            <TextButton
                title={`Already have an account? Sign In Here.`}
                onPress={() => {
                    navigation.navigate('Login');
                }}
            />

            <Loading loading={isLoading} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 120,
        alignItems: 'center'
    },
    title: {
        marginBottom: 12
    },
    input: {
        marginVertical: 4
    },
    loginBtn: {
        marginVertical: 12,
    },
    closeIcon: {
        position: 'absolute',
        top: 28,
        right: 28,
    }
})
