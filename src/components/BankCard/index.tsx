import React from "react";
import { View, Text } from "react-native"

import styles from "./styles"

type CardProps = {
    type: string,
    numberCard: string,
    date: string,
    invoice: number,
    limit: number
}

type BankCardProps = {
    card: CardProps
}

export function BankCard({ card }: BankCardProps) {

    if (!card)
        return <></>

    return (
        <>
            <View style={styles.contentInfoCard}>
                <Text style={styles.propName}>
                    {card.type}
                </Text>
                <Text style={styles.propData}>
                    {card.numberCard}
                </Text>
            </View>
            <View style={styles.contentInfoCard}>
                <Text style={styles.propName}>Vencimento</Text>
                <Text style={styles.propData}>{card.date}</Text>
            </View>
            {card.limit != 0
                ? <>
                    <View style={styles.contentInfoCard}>
                        <View style={styles.contentInfoCard}>
                            <Text style={styles.propName}>Fatura: </Text>
                            <Text style={styles.propData}> R$ {card.invoice.toFixed(2)}</Text>
                        </View>
                        <View style={styles.contentInfoCard}>
                            <Text style={styles.propName}>Limite: </Text>
                            <Text style={styles.propData}>R$ {card.limit.toFixed(2)}</Text>
                        </View>
                    </View>
                </>
                : <></>
            }

        </>
    );
}