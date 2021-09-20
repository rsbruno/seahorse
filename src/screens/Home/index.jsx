import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, Touchable, TouchableOpacity } from "react-native"
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
import ButtonWithText from "../../components/ButtonWithText";
import { ButtonRedWithText } from "../../components/ButtonRedWithText";
import { MyInfo } from "../../components/MyInfo";
import { MyCards } from "../../components/MyCards";
import { MyInvoices } from "../../components/MyInvoices";

export function Home() {
    const [sizeIcons, setSizeIcons] = useState(65)
    const [modalVisbility, setModalVisibility] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapperAll}>
                <View style={styles.wrapperUser}>
                    <View>
                        <Text style={styles.textWelcome}>
                            Olá,{"\n"}
                            <Text style={styles.textName}>Bruno</Text>
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
                            toggleModal={() => { setModalVisibility(true) }}
                        >
                            <FontAwesome
                                name="id-card-o"
                                size={sizeIcons}
                                color={theme.colors.backgroundLight} />
                        </CardGrid>
                        <CardGrid
                            label="Meus Cartões"
                            toggleModal={() => { setModalVisibility(true) }}
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
                            toggleModal={() => { setModalVisibility(true) }}
                        >
                            <Pix
                                width={sizeIcons}
                                height={sizeIcons}
                            />
                        </CardGrid>
                        <CardGrid
                            label="Transferências"
                            toggleModal={() => { setModalVisibility(true) }}
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
                            toggleModal={() => { setModalVisibility(true) }}
                        >
                            <Image
                                source={barcode}
                                style={styles.customImageCards}
                            />
                        </CardGrid>
                        <CardGrid
                            label="Minhas Faturas"
                            toggleModal={() => { setModalVisibility(true) }}
                        >
                            <Ionicons
                                name="newspaper-outline"
                                size={sizeIcons}
                                color={theme.colors.backgroundLight} />
                        </CardGrid>
                    </View>


                </View>
            </View>

            <CustomModal visible={modalVisbility}>
                <View style={styles.wrapperContentModal}>
                    {/* <MyInfo handleModal={() => { setModalVisibility(false) }} /> */}
                    {/* <MyCards /> */}
                    <MyInvoices />
                    <View style={styles.containerButtonModal}>
                        <ButtonRedWithText
                            label="Fechar"
                            handleState={() => { setModalVisibility(false) }}
                        />
                    </View>

                </View>




            </CustomModal>

        </SafeAreaView>
    );
}