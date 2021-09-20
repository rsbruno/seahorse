import React from "react"
import { View, TextInput, TextInputProps } from "react-native"
import styles from "./styles"

type CustomTextInputProps = TextInputProps & {

}

export default function CustomTextInput(props:CustomTextInputProps) {
    return (
        <View style={styles.wrapperInput}>
            <TextInput style={styles.input} {...props} />
        </View>
    );
}