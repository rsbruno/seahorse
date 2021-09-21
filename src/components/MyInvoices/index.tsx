import React from 'react';
import { View, Text } from 'react-native';

import invoices from "../../utils/invoices.json";
import { InvoicesCard } from '../InvoicesCard';
import styles from './styles';

export type InvoiceProps = {
    name: string,
    hour: string,
    value: number,
    installments: number,
    type: number,
}

export function MyInvoices() {
    const total = invoices.reduce(getTotal, 0);
    
    function getTotal(total: number, item: InvoiceProps) {
        return total + (item.value);
    }

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

            <View style={styles.wrapperTotal}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
            </View>

        </View>
    );
}