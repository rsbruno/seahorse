import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    Keyboard
} from "react-native"

import ForgotPasswordModal from "../../components/ForgotPasswordModal";
import SuccesForgotModal from "../../components/SuccessForgotModal";
import ButtonWithText from "../../components/ButtonWithText";
import CustomTextInput from "../../components/Inputs/Text";
import { CustomModal } from "../../components/Modal/Index";
import { SimpleCard } from "../../components/SimpleCard";
import { useNavigation } from "@react-navigation/core";
import Gradient from "../../components/Gradient";
import Barcode from "../../assets/png/barcode.png";
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from "../../contexts/auth";
import logo from "../../assets/png/logo.png";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../global/theme";
import Pix from "../../assets/svg/pix.svg";
import styles from "./styles";

export function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isForgot, setIsForgot] = useState(true);
    const [visibleModal, setVisibleModal] = useState(false);
    const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
    const { setUser } = useAuth();
    const navigation = useNavigation()

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIsOpen(true)
        });
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsOpen(false)
        });
    }, [])

    function handleLogin() {
        setUser({ id: "1", username })
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigation.navigate('Home' as never);
        }, theme.animations.time)
    }

    function forgotPassword() {
        setIsForgot(!isForgot)
        setVisibleModal(!visibleModal)
    }

    return (
        <>
            <Gradient colors={['#F70C22', '#E51C44']}>
                <View style={styles.container}>
                    <Image
                        source={logo}
                        style={styles.logo}
                    />
                    <CustomTextInput
                        placeholder="usuário"
                        onChangeText={(e) => { setUsername(e) }}
                    />
                    <CustomTextInput
                        placeholder="senha"
                        onChangeText={(e) => { setPassword(e) }}
                        secureTextEntry
                    />
                    <View style={styles.wrapperButtonForgot}>
                        <ButtonWithText
                            onPress={() => { forgotPassword() }}
                        >
                            <Text style={styles.forgotPassword}>
                                esqueceu sua senha?
                            </Text>
                        </ButtonWithText>

                    </View>

                    <ButtonWithText
                        style={[
                            styles.buttonSignIn,
                            isLoading ? { opacity: .6 } : false
                        ]}
                        onPress={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading
                            ? <ActivityIndicator color={"#000"} size={22} />
                            : <Text style={styles.buttonInputText}>Entrar</Text>
                        }
                    </ButtonWithText>
                </View>

                {!keyboardIsOpen
                    ? <>
                        <View style={styles.footerCards}>
                            <SimpleCard title="Pix">
                                <Pix width={55} height={55} />
                            </SimpleCard>
                            <SimpleCard title="Pagamentos">
                                <Image source={Barcode}
                                    style={{ width: 55, height: 55 }}
                                />
                            </SimpleCard>
                        </View>
                    </>
                    : <></>
                }

                <CustomModal visible={visibleModal}>
                    <View style={styles.wrapperForgotModal}>
                        <View style={styles.wrapperCloseModal}>
                            <TouchableOpacity
                                style={styles.buttonCloseModal}
                                activeOpacity={.4}
                                onPress={() => { setVisibleModal(!visibleModal) }}
                            >
                                <AntDesign name="close" size={24} color="black" />
                            </TouchableOpacity>

                        </View>
                        {isForgot
                            ? <SuccesForgotModal email={email} />
                            : <ForgotPasswordModal
                                handleEmail={(e) => { setEmail(e) }}
                                setForgot={() => { setIsForgot(!isForgot) }}
                            />
                        }
                    </View>
                </CustomModal>
            </Gradient>
            <StatusBar translucent style="light" />
        </>
    )
}