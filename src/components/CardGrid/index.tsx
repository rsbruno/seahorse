import { FontAwesome } from "@expo/vector-icons";
import React from "react"
import { View, Text, TouchableOpacity } from "react-native";
import { theme } from "../../global/theme";
import Gradient from "../Gradient";
import styles from "./styles";

type CardGridProps = {
    children: string,
    label?: string,
    toggleModal: () => void;
}

export function CardGrid({ children, label, toggleModal }: CardGridProps) {
    return (
        <TouchableOpacity
            style={styles.wrapperCard}
            activeOpacity={.8}
            onPress={()=>{toggleModal()}}
        >
            <Gradient colors={[
                theme.colors.red,
                theme.colors.primary,
            ]}
                style={styles.customCardGradient}
            >
                {children}
                <Text style={styles.labelCard}>{label}</Text>

            </Gradient>
        </TouchableOpacity>
    );
}