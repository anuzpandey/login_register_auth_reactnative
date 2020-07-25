import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function Error({error}) {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start'
    },
    errorText: {
        color: 'red',
        fontSize: 12
    }
});
