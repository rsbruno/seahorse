import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"

type SuccesForgotModalProps = {
    email?: string;
}

export default function SuccesForgotModal({email}:SuccesForgotModalProps) {
    return (
        <View style={styles.wrapperContentModal}>
            <Text style={styles.textContentModal}>
                Enviamos os passos para
                {"\n"}
                {email?<Text style={styles.textBold}> {email}</Text>:false},
                {"\n"}
                verifique para trocar sua senha.
            </Text>
        </View>
    )
}