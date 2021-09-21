import React,{ ReactNode } from 'react';
import { View, Text } from 'react-native';

import { theme } from '../../global/theme';
import Gradient from '../Gradient';
import styles from './styles'

type CardsSelectProps = {
    children:ReactNode,
    label?:string
}

export function CardsSelect({children, label}:CardsSelectProps) {
    return (
        <View style={styles.cardSelect}>
            <Gradient
                colors={[
                    theme.colors.red,
                    theme.colors.primary
                ]}
                style={styles.customGradient}
            >
                <View>
                    {children}
                    <Text style={styles.textCardSelect}>
                        {label}
                    </Text>
                </View>
            </Gradient>
        </View>
    );
}