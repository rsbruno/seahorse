import React from "react"
import { View, TextInput, TextInputProps } from "react-native"

import styles from "./styles"

export default function CustomTextInput(props:TextInputProps) {
    return (
        <View style={styles.wrapperInput}>
            <TextInput style={styles.input} {...props} />
        </View>
    );
}