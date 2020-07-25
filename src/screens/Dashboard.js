import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { FilledButton } from "../components/FilledButton";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";

export function Dashboard({navigation}) {

    const {logout} = React.useContext(AuthContext);
    const user = React.useContext(UserContext);

    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.header}>
                <FilledButton title={'Dashboard'} onPress={() => {
                }}/>
            </View>
            <Text>Dashboard Screen</Text>
            <Text>{user.email}</Text>
            <View style={styles.footer}>
                <FilledButton
                    title={'Logout'}
                    onPress={() => {
                        logout();
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    header: {
        width: '100%',
        position: 'absolute',
        top: 10
    },
    footer: {
        width: '100%',
        position: 'absolute',
        bottom: 10
    }
});
