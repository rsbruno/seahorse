import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

import { theme } from '../../global/theme';
import { InvoicesCard } from '../InvoicesCard';

import invoices from "../../utils/invoices.json"

export type InvoiceProps = {
    name: string,
    hour: string,
    value: number,
    installments: number,
    type: number,
}

export function MyInvoices() {
    return (
        <View style={styles.wrapperModal}>
            <Text style={styles.titleModal}>Minhas Faturas</Text>
            <View style={styles.wrapperAllInvoices}>
                {invoices.map((invoice) => {
                    return (
                        <InvoicesCard
                            key={invoice.hour}
                            invoice={invoice}
                        />
                    );
                })}
            </View>

        </View>
    );
}