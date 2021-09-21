import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

type GradientProps = ViewProps & {
    children: ReactNode,
    colors: string[]
}

export default function Gradient(props: GradientProps) {
    const { children, colors:arrColors } = props;
    return (
        <LinearGradient
            {...props}
            colors={arrColors}
            style={[styles.container,props.style]}
        >
            {children}
        </LinearGradient >
    );
}