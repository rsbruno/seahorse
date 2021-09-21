import React, { ReactNode, useState } from "react"
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

import { theme } from "../../global/theme";
import Gradient from "../Gradient";
import styles from "./styles";

type CardGridProps = {
    children: ReactNode,
    label?: string,
    toggleModal: () => void;
    isloading?: boolean
}

export function CardGrid({ children, label, toggleModal }: CardGridProps) {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <TouchableOpacity
            style={styles.wrapperCard}
            activeOpacity={.8}
            onPress={() => {
                setIsLoading(true)
                setTimeout(() => {
                    setIsLoading(false)
                    toggleModal()
                }, theme.animations.time);
            }}
        >
            <Gradient colors={[
                theme.colors.red,
                theme.colors.primary,
            ]}
                style={styles.customCardGradient}
            >
                {isLoading
                    ? <ActivityIndicator
                        size="large"
                        color={theme.colors.backgroundLight}
                    />
                    : children
                }
                <Text style={styles.labelCard}>{label}</Text>

            </Gradient>
        </TouchableOpacity>
    );
}