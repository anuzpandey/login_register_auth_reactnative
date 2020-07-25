import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
