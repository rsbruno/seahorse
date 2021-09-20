import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles"

type ButtonRedWithTextProps = {
    label?: string;
    handleState: () => void;
}

export function ButtonRedWithText({ label, handleState }: ButtonRedWithTextProps) {
    return (
        <TouchableOpacity
            style={styles.buttonRed}
            activeOpacity={.7}
            onPress={()=>{
                if(handleState)
                    handleState()
            }}
        >
            <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    );
}