import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function TextButton({title, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.btnText}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 8
    },
    btnText: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 12,
    }
});
