import React, { useState, ReactNode, useEffect } from "react";
import { View, Text, SafeAreaView, Image, Touchable, TouchableOpacity, StatusBar } from "react-native"
import Gradient from "../../components/Gradient";
import { theme } from "../../global/theme";
import styles from "./styles";

import avatar from "../../assets/png/man.png"

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { CardGrid } from "../../components/CardGrid";
import Pix from "../../assets/pix.svg"
import transfers from "../../assets/png/transfers.png"
import barcode from "../../assets/png/barcode.png"
import { CustomModal } from "../../components/Modal/Index";
import { ButtonRedWithText } from "../../components/ButtonRedWithText";
import { MyInfo } from "../../components/MyInfo";
import { MyCards } from "../../components/MyCards";
import { MyInvoices } from "../../components/MyInvoices";
import { MyPayments } from "../../components/MyPayments";
import { Transfers } from "../../components/Transfers";
import { MaterialIcons } from '@expo/vector-icons';
import { MyPix } from "../../components/MyPix";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../contexts/auth";
// import { StatusBar } from "expo-status-bar"



export function Home() {
    const [sizeIcons, setSizeIcons] = useState(65)
    const [modalVisbility, setModalVisibility] = useState(false)
    const [screen, setScreen] = useState(1);
    const navigation = useNavigation();
    const { user } = useAuth();
    const [name, setName] = useState(user.username || "")

    function ModalContent() {
        switch (screen) {
            case 1:
                return <MyInfo />
            case 2:
                return <MyCards />
            case 3:
                return <MyPix />
            case 4:
                return <Transfers />
            case 5:
                return <MyPayments />
            case 6:
                return <MyInvoices />
        }
    }

    return (
        <>
            <StatusBar
                hidden
            />
            <View style={styles.container}>
                <View style={styles.wrapperAll}>
                    <View style={styles.wrapperGoBack}>
                        <TouchableOpacity
                            style={styles.buttonGoBack}
                            activeOpacity={.4}
                            onPress={() => {
                                if (navigation.canGoBack())
                                    navigation.goBack()
                            }}
                        >
                            <MaterialIcons
                                name="arrow-back-ios"
                                size={24}
                                color="black"
                            />
                            <Text style={styles.textGoBack}>voltar</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.wrapperUser}>
                        <View>
                            <Text style={styles.textWelcome}>
                                Olá,{"\n"}
                                <Text style={styles.textName}>{name}</Text>
                            </Text>
                        </View>

                        <View style={styles.wrapperAvatar}>
                            <Gradient colors={[
                                theme.colors.red,
                                theme.colors.primary,
                            ]}
                                style={styles.customGradient}
                            >
                                <View style={styles.contentAvatar}>
                                    <Image
                                        source={avatar}
                                        style={styles.imageAvatar}
                                    />
                                </View>
                            </Gradient>
                        </View>
                    </View>

                    <View style={styles.wrapperGrid}>

                        <View style={styles.wrapperCards}>
                            <CardGrid
                                label="Meus Dados"
                                toggleModal={() => {
                                    setScreen(1)
                                    setModalVisibility(true)
                                }}
                            >
                                <FontAwesome
                                    name="id-card-o"
                                    size={sizeIcons}
                                    color={theme.colors.backgroundLight} />
                            </CardGrid>
                            <CardGrid
                                label="Meus Cartões"
                                toggleModal={() => {
                                    setScreen(2)
                                    setModalVisibility(true)
                                }}
                            >
                                <Ionicons
                                    name="ios-card-outline"
                                    size={sizeIcons}
                                    color={theme.colors.backgroundLight} />
                            </CardGrid>
                        </View>

                        <View style={styles.wrapperCards}>
                            <CardGrid
                                label="Fazer Pix"
                                toggleModal={() => {
                                    setScreen(3)
                                    setModalVisibility(true)
                                }}
                            >
                                <Pix
                                    width={sizeIcons}
                                    height={sizeIcons}
                                />
                            </CardGrid>
                            <CardGrid
                                label="Transferências"
                                toggleModal={() => {
                                    setScreen(4)
                                    setModalVisibility(true)
                                }}
                            >
                                <Image
                                    source={transfers}
                                    style={styles.customImageCards}
                                />
                            </CardGrid>
                        </View>

                        <View style={styles.wrapperCards}>
                            <CardGrid
                                label="Pagamentos"
                                toggleModal={() => {
                                    setScreen(5)
                                    setModalVisibility(true)
                                }}
                            >
                                <Image
                                    source={barcode}
                                    style={styles.customImageCards}
                                />
                            </CardGrid>
                            <CardGrid
                                label="Minhas Faturas"
                                toggleModal={() => {
                                    setScreen(6)
                                    setModalVisibility(true)
                                }}
                            >
                                <Ionicons
                                    name="newspaper-outline"
                                    size={sizeIcons}
                                    color={theme.colors.backgroundLight} />
                            </CardGrid>
                        </View>


                    </View>
                </View>
            </View>
            <CustomModal visible={modalVisbility}>
                <View style={styles.wrapperContentModal}>
                    {/* Esta função devolve um component */}
                    {ModalContent(1)}

                    <View style={styles.containerButtonModal}>
                        <ButtonRedWithText
                            label="Fechar"
                            handleState={() => { setModalVisibility(false) }}
                        />
                    </View>

                </View>
            </CustomModal>

        </>
    );
}