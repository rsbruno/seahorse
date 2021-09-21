import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { CardsSelect } from '../CardsSelect';
import { theme } from '../../global/theme';
import { TitleModal } from '../TitleModal';
import styles from './styles'

export function MyPix() {
    return (
        <View style={styles.containerModal}>
            <TitleModal
                title="Fazer/Receber Pix"
            />
            <ScrollView>
                <View style={styles.wrapperCardsScroll}>
                    <CardsSelect
                        label="Ler QR Code"
                    >
                        <Feather
                            name="camera"
                            size={24}
                            color={theme.colors.backgroundLight}
                        />
                    </CardsSelect>

                    <CardsSelect
                        label="Contato Pix"
                    >
                        <Ionicons
                            name="people-outline"
                            size={24}
                            color={theme.colors.backgroundLight}
                        />
                    </CardsSelect>

                    <CardsSelect
                        label="Pagar Pessoa"
                    >
                        <MaterialCommunityIcons
                            name="transfer-up"
                            size={24}
                            color={theme.colors.backgroundLight}
                        />
                    </CardsSelect>

                    <CardsSelect
                        label="Cobrar Pessoa"
                    >
                        <MaterialCommunityIcons
                            name="transfer-down"
                            size={24}
                            color={theme.colors.backgroundLight}
                        />
                    </CardsSelect>
                </View>
            </ScrollView>

            <View>
                <Text style={styles.subTitle}>Seu Saldo</Text>
                <View style={styles.inline}>
                    <Text style={styles.textLabel}>
                        Conta Corrente
                    </Text>
                    <Text style={styles.textBalance}>
                        R$ 2058,99
                    </Text>
                </View>
            </View>

            <View>
                <Text style={styles.subTitle}>Seu Histórico</Text>
                <View style={styles.contentPix}>
                    <FontAwesome
                        name="close"
                        size={32}
                        color={theme.colors.primary}
                    />
                    <Text style={styles.textPix}>
                        Você ainda não fez nenhum pix!{"\n"}
                        Não Existem informações para mostrar
                    </Text>
                </View>
            </View>
        </View>
    );
}