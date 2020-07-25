import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon from "react-native-ionicons";

export function IconButton({name, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.iconButton, style]} onPress={onPress}>
            <Icon name={name} color={'purple'}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconButton: {
    }
});
