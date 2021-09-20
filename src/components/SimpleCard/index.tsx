import React, { ReactNode } from "react"
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles"

type SimpleCardProps = {
    children: ReactNode,
    title?: string
}

export function SimpleCard({ children, title }: SimpleCardProps) {
    return (
        <TouchableOpacity
            style={styles.wrapperCard}
            activeOpacity={.6}
        >
            <View style={styles.contentCard}>
                {children}
                <Text style={styles.descriptionCard}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}