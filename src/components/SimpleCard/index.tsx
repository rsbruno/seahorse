import React from "react"
import { Text, View } from "react-native";

import styles from "./styles"
import Pix from "../../assets/pix.svg"

export function SimpleCard() {
    return (
        <View style={styles.wrapperCard}>
            <View>
                <Pix width={55} height={55} />
                <Text style={styles.descriptionCard}>Pix</Text>
            </View>
        </View>
    );
}