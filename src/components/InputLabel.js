import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function InputLabel({label, style}) {
    return (
        <Text style={[styles.inputLabel, style]}>{label}</Text>
    );
}

const styles = StyleSheet.create({
    inputLabel: {
        fontSize: 14,
        alignSelf: 'flex-start',
        color: 'purple'
    }
});
