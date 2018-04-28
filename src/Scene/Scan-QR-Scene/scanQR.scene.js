
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import QRScanner from '../../Components/QRScanner/qrScanner.component';


/** Common Style */
import { SceneCommonStyles, TextStyles } from '../../Common/style.common';
import { PRIMARY, TEXT_COLOR } from '../../Constants/color.constants';


export default class ScanQRScene extends Component {
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
                    <QRScanner
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
})
