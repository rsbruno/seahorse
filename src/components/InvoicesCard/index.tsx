import React from 'react';
import { View, Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { InvoiceProps } from '../MyInvoices';
import { theme } from '../../global/theme';
import styles from './styles'

type InvoicesCardProps = {
    invoice: InvoiceProps
}

export function InvoicesCard({ invoice }: InvoicesCardProps) {

    if (!invoice)
        return <></>

    return (
        <View style={styles.cardInvoice}>
            <View style={styles.wrapperAvatarInvoice}>
                <View style={styles.avatarInvoice}>
                    <AntDesign
                        name="shoppingcart"
                        size={24}
                        color={theme.colors.backgroundLight}
                    />
                </View>
            </View>
            <View style={styles.namePlace}>
                <Text style={styles.titleInvoice}>{invoice.name}</Text>
                <Text style={styles.subTitleInvoice}>{invoice.hour}</Text>
            </View>
            <View style={styles.wrapperPrice}>
                <Text style={styles.titleInvoice}>
                    R$ {invoice.value.toFixed(2)}
                </Text>
                <Text style={styles.subTitleInvoice}>
                    {invoice.installments}x
                </Text>
            </View>
        </View>
    );
}