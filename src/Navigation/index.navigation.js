import React from 'react';
import { View, Image } from 'react-native';
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import { PRIMARY } from '../Constants/color.constants';

/** Routes */
import {
    HOME_SCENE,
    CREATE_WALLET_NAME_INPUT_SCENE,
    CREATE_WALLET_CREATE_INPORT_WALLET_SCENE,
    CREATE_WALLET_DISPLAY_PASSPHRASE,
    SHOW_QR_SCENE,
} from '../Constants/scene.constants';

/** Scenes */
import HomeScene from '../Scene/Home-Scene/home.scene';
import CreateWalletNameInputScene from '../Scene/Create-Wallet-Name-Input-Scene/createWalletNameInput.scene';
import CreateWalletCreateImportWallet from '../Scene/Create-Wallet-Inport-Create-Scene/createWalletInportCreate.scene';
import CreateWalletDisplayPassphrase from '../Scene/Create-Wallet-Passphrase-Display-Scene/createWalletPassphraseDisplay.scene';
import ShowQRScene from '../Scene/Show-QR-Scene/showQR.scene';

const Root = () => (
    <Router>
        <Overlay key="overlay">
            <Modal key="modal"
                hideNavBar
                transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
            >
                <Lightbox key="lightbox">
                    <Stack
                        navigationBarStyle={{ backgroundColor: PRIMARY, elevation: 0 }}
                        tintColor='#fff'
                        key="root"
                        titleStyle={{ alignSelf: 'center' }}
                    >
                        <Scene hideNavBar key={HOME_SCENE} initial clone component={HomeScene} />
                        <Scene key={CREATE_WALLET_NAME_INPUT_SCENE} clone component={CreateWalletNameInputScene} />
                        <Scene key={CREATE_WALLET_CREATE_INPORT_WALLET_SCENE} clone component={CreateWalletCreateImportWallet} />
                        <Scene key={CREATE_WALLET_DISPLAY_PASSPHRASE} clone component={CreateWalletDisplayPassphrase} />
                        <Scene key={SHOW_QR_SCENE} clone component={ShowQRScene} />
                    </Stack>
                </Lightbox>
            </Modal>
        </Overlay>
    </Router>
);

export default Root;