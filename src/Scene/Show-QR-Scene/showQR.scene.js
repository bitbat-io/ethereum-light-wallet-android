
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import QRCode from 'react-native-qrcode';


/** Common Style */
import { SceneCommonStyles, TextStyles } from '../../Common/style.common';
import { PRIMARY, TEXT_COLOR } from '../../Constants/color.constants';


export default class ShowQRScene extends Component {
    render() {
        const { address } = this.props;

        return (
            <View
                style={SceneCommonStyles.container}
            >
                <View style={styles.container}>
                    <View style={{ margin: 15 }}>
                        <Text style={TextStyles.h2Light}>Show QR to the sender</Text>
                    </View>
                    <QRCode
                        value={String(address)}
                        size={250}
                        bgColor={PRIMARY}
                        fgColor={TEXT_COLOR} />
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
