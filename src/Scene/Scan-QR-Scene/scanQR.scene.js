
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import QRCodeScanner from 'react-native-qrcode-scanner';

/** Common Style */
import { SceneCommonStyles, TextStyles } from '../../Common/style.common';
import { PRIMARY, TEXT_COLOR } from '../../Constants/color.constants';

/** Utils */
import { createTransaction } from '../../Utils/transactions.utils';

export default class ScanQRScene extends Component {
    onSuccess(e) {
        const { amount } = this.props.slot;
        const toAddress = e.data;

        const transaction = createTransaction(toAddress, amount);
        console.log(transaction);
    }

    render() {
        const { address } = this.props;

        return (
            <View
                style={SceneCommonStyles.container}
            >
                <View style={styles.container}>
                    <View style={{ margin: 15 }}>
                        <Text style={TextStyles.h2Light}>Scan QR to sent ether</Text>
                    </View>
                    <QRCodeScanner
                        onRead={this.onSuccess.bind(this)}
                    />
                </View>
            </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
})
