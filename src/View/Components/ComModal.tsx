import React from 'react';
import {
    View,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

interface ModalButton {
    text: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

interface CustomModalProps {
    visible: boolean;
    onClose: () => void;
    title: string;
    message: string;
    buttons?: ModalButton[];
    children: React.ReactNode;
}

const ComModal: React.FC<CustomModalProps> = ({
    visible,
    onClose,
    title,
    message,

    children,
}) => {
    return (
        <Modal transparent visible={visible} animationType="slide" onRequestClose={onClose}>
            <BlurView style={styles.absolute} blurType="light" blurAmount={20} reducedTransparencyFallbackColor="white" />
            {/* <View style={styles.container}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <View style={styles.buttonContainer}>
            {buttons.map((btn, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.button, btn.style]}
                onPress={btn.onPress}
              >
                <Text style={[styles.buttonText, btn.textStyle]}>{btn.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View> */}
            <View style={styles.modalElement}>

                {children}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    absolute: {
        ...StyleSheet.absoluteFillObject,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    modalElement:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    message: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#5C868B',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '500',
    },
});

export default ComModal;
