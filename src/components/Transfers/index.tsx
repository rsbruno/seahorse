import React from 'react';
import { View, Text } from 'react-native';
import { TitleModal } from '../TitleModal';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'
import { theme } from '../../global/theme';
export function Transfers() {
    return (
        <View style={styles.wrapperContent}>
            <TitleModal
                title="Transferências"
            />
            <View style={styles.contentTransfers}>
                <FontAwesome
                    name="close"
                    size={32}
                    color={theme.colors.primary}
                />
                <Text style={styles.textTransfer}>
                    Você ainda não fez nenhuma transferência!{"\n"}
                    Não Existem informações para mostrar
                </Text>
            </View>
        </View>
    );
}