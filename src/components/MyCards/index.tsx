import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/theme";
import { BankCard } from "../BankCard";
import styles from "./styles"

import cards from "../../utils/cards.json"

export function MyCards() {
    return (
        <View style={styles.contentModal}>
            <Text style={styles.title}>Meus Cartões</Text>
            {cards.map((card) => {
                return (
                    <View style={styles.containerCards} key={card.id}>
                        <FontAwesome
                            name="credit-card"
                            size={24}
                            color={theme.colors.primary} />
                        <View style={styles.divisor} />
                        <BankCard card={card} />
                    </View>
                )
            })}

        </View>
    );
}