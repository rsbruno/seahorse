import React from 'react';
import { View, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../global/theme';
import styles from './styles'

type Payment = {
    status: boolean,
    title: string,
    value: number,
    date: string
}

type PaymentProps = {
    payment: Payment
}

export function Payment({payment}:PaymentProps) {
    return (
        <View style={styles.containerPayments}>
            <View>
                <View style={styles.topPayments}>
                    <View style={styles.wrapperCifrao}>
                        <MaterialIcons
                            name="attach-money"
                            size={32}
                            color={theme.colors.backgroundLight}
                        />
                    </View>
                    <Text style={styles.statusPayment}>
                        {payment.status?"Pago":"Pendente"}
                    </Text>
                </View>

                <View style={styles.wrapperPayment}>
                    <Text style={styles.titleName}>{payment.title}</Text>
                    <Text style={styles.bold}>
                        Valor: R$ <Text style={styles.normal}>
                            {payment.value.toFixed(2)}
                        </Text>
                    </Text>
                    <Text style={styles.bold}>
                        Vencimento: <Text style={styles.normal}>
                            {payment.date}
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}