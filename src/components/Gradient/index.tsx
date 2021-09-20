import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

type GradientProps = {
    children: ReactNode,
    colors: string[]
}

export default function Gradient({ children, colors }: GradientProps) {
    return (
        <LinearGradient
            colors={colors}
            style={styles.container}
        >
            {children}
        </LinearGradient >
    );
}