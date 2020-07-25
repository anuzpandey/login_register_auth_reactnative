import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function FilledButton({title, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.btnText}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 8
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
