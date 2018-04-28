import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';

/** Common Style */
import { SceneCommonStyles, TextStyles, ButtonStyles, InputBoxStyle } from '../../Common/style.common';

/** Routes */
import { CREATE_WALLET_DISPLAY_PASSPHRASE } from '../../Constants/scene.constants';

export default class CreateWalletNameInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            walletName: '',
        }
    }

    navigateToNextScene = () => {
        Keyboard.dismiss();
        const slot = {
            walletName: this.state.walletName,
        }
        Actions.push(CREATE_WALLET_DISPLAY_PASSPHRASE, { slot })
    }
    render() {
        const { walletName } = this.state;
        return (
            <View
                style={SceneCommonStyles.container}
            >
                <View style={styles.container1}>
                    <Text style={TextStyles.h2Light}>Give it a name</Text>
                </View >
                <View style={styles.container2}>
                    <TextInput
                        style={InputBoxStyle.inputBox}
                        value={walletName}
                        placeholder="Wallet name"
                        underlineColorAndroid={'#fff'}
                        placeholderTextColor={'#fff'}
                        onChangeText={(walletName) => this.setState({ walletName })}
                        onSubmitEditing={this.navigateToNextScene}
                    />
                </View>
                <View style={styles.container3}>
                    <TouchableOpacity
                        onPress={this.navigateToNextScene}
                        style={ButtonStyles.buttonWrap}
                    >
                        <Text style={ButtonStyles.buttonText}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}


const styles = StyleSheet.create({
    container1: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    container2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})
