import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';

export function Loading({loading}) {
    if (!loading) {
        return <View/>;
    }
    return (
        <View style={styles.overlay}>
            <View style={styles.container}>
                <ActivityIndicator color={'black'}/>
                <Text style={styles.text}>Loading...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        ...StyleSheet.absoluteFill,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 24
    },
    text: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: '400'
    }
});
