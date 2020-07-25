import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { FilledButton } from "../components/FilledButton";
import { TextButton } from "../components/TextButton";
import { Error } from "../components/Error";
import { InputLabel } from "../components/InputLabel";
import { AuthContext } from "../context/AuthContext";
import { Loading } from "../components/Loading";

export function LoginScreen({navigation}) {

    const {login} = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('anuzbvbmaniac123@gmail.com');
    const [password, setPassword] = React.useState('secret123');

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');

    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <Heading style={[styles.title, {color: 'purple', marginBottom: 24}]}>LOGIN</Heading>

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

            <Error error={error}/>
            <FilledButton
                title={'Login'}
                style={styles.loginBtn}
                onPress={async () => {
                    try {
                        setIsLoading(true);
                        console.log(email, password);
                        await login(email, password);
                    } catch (e) {
                        setError(e.message);
                        setIsLoading(false);
                    }
                }}
            />

            <TextButton
                title={`Don't have an account? Register Here.`}
                onPress={() => {
                    navigation.navigate('Register');
                }}
            />
            <Loading loading={isLoading}/>
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
    }
})
