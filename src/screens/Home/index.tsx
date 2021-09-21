import React, { useState } from "react";
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StatusBar
} from "react-native"

import { ButtonRedWithText } from "../../components/ButtonRedWithText";
import { CustomModal } from "../../components/Modal/Index";
import { MyInvoices } from "../../components/MyInvoices";
import { MyPayments } from "../../components/MyPayments";
import { Transfers } from "../../components/Transfers";
import transfers from "../../assets/png/transfers.png";
import { useNavigation } from "@react-navigation/core";
import { CardGrid } from "../../components/CardGrid";
import barcode from "../../assets/png/barcode.png";
import { MaterialIcons } from '@expo/vector-icons';
import { MyCards } from "../../components/MyCards";
import { FontAwesome } from '@expo/vector-icons';
import Gradient from "../../components/Gradient";
import { MyInfo } from "../../components/MyInfo";
import cifrao from "../../assets/png/cifrao.png";
import { MyPix } from "../../components/MyPix";
import { Ionicons } from '@expo/vector-icons';
import avatar from "../../assets/png/man.png";
import { useAuth } from "../../contexts/auth";
import { theme } from "../../global/theme";
import Pix from "../../assets/svg/pix.svg";
import styles from "./styles";

export function Home() {
    const [sizeIcons, setSizeIcons] = useState(65)
    const [modalVisbility, setModalVisibility] = useState(false)
    const [screen, setScreen] = useState(1);
    const navigation = useNavigation();
    const { user } = useAuth();
    const [name, setName] = useState(user.username || "")

    function handleCardGrid(component = 1) {
        setScreen(component)
        setModalVisibility(true)
    }

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
            <ImageBackground
                style={styles.container}
                source={cifrao}
            >
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
                                    handleCardGrid(1)
                                }}
                            >
                                <FontAwesome
                                    name="id-card-o"
                                    size={sizeIcons}
                                    color={theme.colors.backgroundLight}
                                />
                            </CardGrid>
                            <CardGrid
                                label="Meus Cartões"
                                toggleModal={() => {
                                    handleCardGrid(2)
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
                                    handleCardGrid(3)
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
                                    handleCardGrid(4)
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
                                    handleCardGrid(5)
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
                                    handleCardGrid(6)
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
            </ImageBackground>
            
            <CustomModal visible={modalVisbility}>
                <View style={styles.wrapperContentModal}>
                    {ModalContent()}
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