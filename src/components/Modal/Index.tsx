import React, { ReactNode } from 'react';
import { Modal, } from 'react-native';

import styles from './styles'

type ModalProps = {
    visible: boolean,
    children: ReactNode
}

export function CustomModal({ visible, children }: ModalProps) {
    return (
        <Modal
            transparent
            visible={visible}
            animationType="slide"
            style={styles.modal}
        >
            {children}
        </Modal>
    );
}

