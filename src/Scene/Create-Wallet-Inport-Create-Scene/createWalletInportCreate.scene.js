import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

/** Common Style */
import { SceneCommonStyles, ButtonStyles } from '../../Common/style.common';

import { CREATE_WALLET_DISPLAY_PASSPHRASE } from '../../Constants/scene.constants';

export default class CreateWalletImportCreateScene extends Component {

    navigateToCreateNewWallet = () => {
        const { slot } = this.props;

        Actions.push(CREATE_WALLET_DISPLAY_PASSPHRASE, { slot });
    }

    navigateToInporWallet = () => {
    }

    render() {
        return (
            <View
                style={SceneCommonStyles.container}
            >
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={this.navigateToInporWallet}
                        style={[ButtonStyles.buttonWrap, { margin: 10 }]}
                    >
                        <Text style={ButtonStyles.buttonText}>
                            Import Wallet
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.navigateToCreateNewWallet}
                        style={[ButtonStyles.buttonWrap, { margin: 10 }]}
                    >
                        <Text style={ButtonStyles.buttonText}>
                            Create Wallet
                        </Text>
                    </TouchableOpacity>
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
