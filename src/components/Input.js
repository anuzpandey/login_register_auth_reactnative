import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export function Input({style, ...props}) {
    return (
        <TextInput {...props} style={[styles.textInput, style]} />
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#e8e8e8',
        width: '100%',
        padding: 16,
        borderRadius: 8
    }
});
