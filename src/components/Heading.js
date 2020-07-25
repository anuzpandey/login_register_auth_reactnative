import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function Heading({children, style, ...props}) {
    return (
        <Text {...props} style={[styles.headingText, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontWeight: 'bold',
        fontSize: 32
    }
});
