import React from 'react';
import { View, Text } from 'react-native';

import payments from '../../utils/payments.json'
import { Payment } from '../Payment';
import styles from './styles'

export function MyPayments() {
    return (
        <View style={styles.wrapperModal}>
            <Text style={styles.titleModal}>Meus Pagamentos</Text>
            {payments.map((payment) => {
                return (
                    <Payment
                        payment={payment}
                        key={payment.id} 
                    />
                )
            })}
        </View>
    );
}