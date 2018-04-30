import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Actions } from 'react-native-router-flux';

/** Common Style */
import { SceneCommonStyles, TextStyles } from '../../Common/style.common';

/** Routes */
import { CREATE_WALLET_NAME_INPUT_SCENE } from '../../Constants/scene.constants';

/** Components */
import WalletCard from '../../Components/Wallet-Card/walletCard.component';

/** Utils */
import { PersistWallet, FetchAllWallets } from '../../Utils/persist.utils';

export default class HomeScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            walletList: [],
            refresh: false,
        }
    }

    componentDidMount = async () => {
        const { slot } = this.props;
        if (slot && typeof slot == 'object' && slot.wallet) {
            const wallet = slot.wallet;
            wallet.walletName = slot.walletName;
            PersistWallet(wallet);
            this.pushWallet(wallet);
        }
        const wallets = await FetchAllWallets();
        this.setState({ walletList: wallets || [] });
    }

    pushWallet = async (wallet) => {
        console.log('push', wallet);
        const c = await wallet.getBalance();
        console.log(c);

        this.setState({ walletList: [...this.state.walletList, wallet], refresh: !this.state.refresh });
    }

    RenderItem = ({ item }) => {
        return (
            <WalletCard
                payload={item}
            />
        );
    }

    navigateToCreateNewAccount = () => {
        Actions.push(CREATE_WALLET_NAME_INPUT_SCENE);
    }

    render() {
        const { walletList } = this.state;
        console.log(walletList);
        return (
            <View
                style={SceneCommonStyles.container}
            >
                <View style={styles.container1}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                        <Text style={TextStyles.h1Light}>Total balance</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Text style={TextStyles.h1Bold}>ETH: 0.00</Text>
                        <Text style={TextStyles.h1Light}>USD: 0.00$</Text>
                    </View>
                </View >
                <View style={styles.container2}>
                    <FlatList
                        data={walletList}
                        renderItem={this.RenderItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.address}
                        extraData={this.state.refresh}
                    />
                </View>
                <ActionButton
                    buttonColor="#e32"
                    position="right"
                    onPress={this.navigateToCreateNewAccount}
                />
            </View >
        )
    }
}


const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        paddingBottom: 20,
    },
    container2: {
        flex: 3,
    }
})
