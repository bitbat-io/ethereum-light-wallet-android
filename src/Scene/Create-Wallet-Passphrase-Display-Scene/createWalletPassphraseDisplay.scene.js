import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import RNChipView from 'react-native-chip-view'

/** Common Style */
import { SceneCommonStyles, TextStyles, ButtonStyles, InputBoxStyle } from '../../Common/style.common';

/** Routes */
import { CREATE_WALLET_CREATE_INPORT_WALLET_SCENE, HOME_SCENE } from '../../Constants/scene.constants';
import { LIGHT_GREY } from '../../Constants/color.constants';

/** Wallet Utils */
import { GenerateMnemonics, LoadWalletFromMnemonics } from '../../Utils/wallet.utils';

export default class CreateWalletPassphraseDispaly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mnemonics: [],
        }
    }

    componentDidMount = async () => {
        const mnemonics = await GenerateMnemonics();
        this.setState({ mnemonics });
    }

    RenderChip = ({ title }) => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', minWidth: 80, height: 30, borderRadius: 40, backgroundColor: LIGHT_GREY, padding: 5, margin: 5 }}>
                <Text style={TextStyles.normalGrey}>{title}</Text>
            </View>
        )
    }

    createNewWallet = async () => {
        const { slot } = this.props;
        const { mnemonics } = this.state;

        const wallet = LoadWalletFromMnemonics(mnemonics);
        if (wallet) {
            slot.wallet = wallet;
            Actions.push(HOME_SCENE, { slot });
        }
    }

    render() {
        const { mnemonics } = this.state;

        return (
            <View
                style={SceneCommonStyles.container}
            >
                <View style={styles.container1}>
                    <Text style={TextStyles.h2Light}>Save carefully your sequence of mnemonics:</Text>
                    <Text style={TextStyles.message}>When creating a new wallet you will receive a sequence of mnemonics which represent your "personal password". Anyone with this sequence may be able to reconfigure your wallet in any new device. Keep it stored as secure as possible. Only you should have access to this information.</Text>
                </View >
                <View style={styles.container2}>
                    {
                        mnemonics.map((item, key) => {
                            return (
                                <this.RenderChip
                                    title={item}
                                    key={key}
                                />
                            )
                        })
                    }
                </View>
                <View style={styles.container3}>
                    <TouchableOpacity
                        onPress={this.createNewWallet}
                        style={ButtonStyles.buttonWrap}
                    >
                        <Text style={ButtonStyles.buttonText}>
                            Create New Wallet
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}


const styles = StyleSheet.create({
    container1: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    container2: {
        flex: 2,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    container3: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})
