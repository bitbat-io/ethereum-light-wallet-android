import React, { PureComponent } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableNativeFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { WIDTH, HEIGHT } from '../../Utils/dimensions.utils';
import { LIGHT_GREY } from '../../Constants/color.constants';
import { TextStyles } from '../../Common/style.common';
import { SHOW_QR_SCENE } from '../../Constants/scene.constants';

export default class WalletCard extends PureComponent {

    sendEther = () => {

    }

    receiveEther = () => {
        const { payload } = this.props;
        const address = payload.address;
        
        Actions.push(SHOW_QR_SCENE, { address });
    }

    render() {
        const { payload } = this.props;

        return (
            <View
                style={styles.container}
            >
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ width: 50, height: 50, resizeMode: 'contain' }}
                            source={require('../../assets/wallet.png')}
                        />
                    </View>
                    <View style={{ flex: 3, }}>
                        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={TextStyles.normalGreyBig}>{payload.walletName}</Text>
                        </View>
                        {/* <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Text style={TextStyles.normalGrey}>Eth: 0.3432</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={TextStyles.normalGrey}>USD: 13$</Text>
                            </View>
                        </View> */}
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Text style={TextStyles.messageGrey}>{payload.address}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableNativeFeedback
                        style={{ flex: 1, }}
                        onPress={this.sendEther}
                    >
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: LIGHT_GREY }}>
                            <Text style={TextStyles.normalGrey}>Send</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        style={{ flex: 1, }}
                        onPress={this.receiveEther}
                    >
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: LIGHT_GREY }}>
                            <Text style={TextStyles.normalGrey}>Receive</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH - 20,
        height: 140,
        backgroundColor: '#fff',
        elevation: 4,
        marginBottom: 20
    }
})