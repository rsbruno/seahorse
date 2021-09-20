import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

import { theme } from '../../global/theme';
import { Payment } from '../Payment';
import payments from '../../utils/payments.json'

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