import React, { useState } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    TextInput, ActivityIndicator
} from "react-native"

import { theme } from "../../global/theme";
import styles from "./styles"

type ForgotPasswordModalProps = {
    handleEmail: (e: string) => void;
    setForgot: () => void;
}

export default function ForgotPasswordModal({ handleEmail, setForgot }: ForgotPasswordModalProps) {
    const [isLoadingForgot, setIsLoadingForgot] = useState(false);

    function handleForgot() {
        setIsLoadingForgot(true)
        setTimeout(() => {
            setIsLoadingForgot(false)
            setForgot()
        }, theme.animations.time);
    }

    return (
        <View style={styles.contentInput}>
            <Text style={styles.textForgotModal}>
                Esqueceu sua senha?
            </Text>
            <Text style={styles.subtextForgotModal}>
                Para redefinir sua senha digite seu email
            </Text>
            <View style={styles.wrapperInputModal}>
                <TextInput
                    style={styles.inputModal}
                    onChangeText={(e) => handleEmail(e)}
                />
            </View>
            <TouchableOpacity
                onPress={() => { handleForgot() }}
                activeOpacity={.6}
                style={styles.buttonForgotModal}
                disabled={isLoadingForgot}
            >

                {isLoadingForgot
                    ? <ActivityIndicator color={theme.colors.textHightLight} size={22} />
                    : <Text
                        style={styles.buttonTextForgotModal}
                    >trocar senha</Text>
                }
                
            </TouchableOpacity>
        </View>
    )
}