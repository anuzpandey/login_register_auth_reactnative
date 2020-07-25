import React from 'react';
import { StyleSheet } from 'react-native';
import { IconButton } from "./IconButton";

export function HeaderIconButton({name, style, onPress}) {
    return (
        <IconButton name={name} style={styles.iconButton} onPress={onPress}/>
    );
}

const styles = StyleSheet.create({
    iconButton: {}
});
