import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { theme } from "../../global/theme";
import { ButtonRedWithText } from "../ButtonRedWithText";
import Gradient from "../Gradient";
import styles from "./styles";
import avatar from "../../assets/png/man.png"
import { useAuth } from "../../contexts/auth";
import { StatusBar } from "expo-status-bar";

type MyInfoProps = {
    handleModal: () => void
}

export function MyInfo({ handleModal }: MyInfoProps) {

    const {user} = useAuth();
    const [name,setName] = useState(user.username || "")

    return (

        <View style={styles.wrapperMe}>
            <View style={styles.containerMe}>
                <View>
                    <Text style={styles.textNameMe}>{name}</Text>
                    <Text style={styles.textMe}>
                        <Text style={styles.textBold}>Ag: </Text>
                        1234-5
                        <Text style={styles.textBold}> Cc: </Text>
                        12345-6
                    </Text>
                    <Text style={styles.textMe}>
                        <Text style={styles.textBold}>
                            Banco: </Text>
                        1234 - MyBank S.A.
                    </Text>
                </View>

                <View style={styles.wrapperAvatarMe}>
                    <Gradient colors={[
                        theme.colors.red,
                        theme.colors.primary,
                    ]}
                        style={styles.customGradientMe}
                    >
                        <View style={styles.contentAvatarMe}>
                            <Image
                                source={avatar}
                                style={styles.imageAvatar}
                            />
                        </View>
                    </Gradient>
                </View>
            </View>

            <Text style={styles.title}>
                Meus Saldos
            </Text>
            <View style={styles.contentvalues}>
                <Text style={styles.textBold}>
                    Conta-Corrente
                </Text>
                <Text style={styles.textBalance}>
                    R$ 2058,99
                </Text>
            </View>
            <View style={styles.contentvalues}>
                <Text style={styles.textBold}>
                    Conta-Popança
                </Text>
                <Text style={styles.textBalance}>
                    R$ 5236,99
                </Text>
            </View>

            <StatusBar
                style="dark"
            />
        </View>
    )
}