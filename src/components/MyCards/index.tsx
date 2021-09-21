import React from "react";
import { View, Text } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { theme } from "../../global/theme";
import cards from "../../utils/cards.json"
import { BankCard } from "../BankCard";
import styles from "./styles"


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