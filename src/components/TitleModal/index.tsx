import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

type TitleModalProps = {
    title: string
}

export function TitleModal({ title }: TitleModalProps) {
    return (
        <View style={styles.wrapperModal}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}