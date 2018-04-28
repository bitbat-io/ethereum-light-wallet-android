import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';

/** Common Style */
import { SceneCommonStyles, TextStyles, ButtonStyles, InputBoxStyle } from '../../Common/style.common';

/** Routes */
import { SCAN_QR_SCENE } from '../../Constants/scene.constants';

export default class EnterAmountScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
        }
    }

    navigateToNextScene = () => {
        Keyboard.dismiss();
        const slot = {
            amount: this.state.amount,
        }
        Actions.push(SCAN_QR_SCENE, { slot });
    }

    render() {
        const { amount } = this.state;
        return (
            <View
                style={SceneCommonStyles.container}
            >
                <View style={styles.container1}>
                    <Text style={TextStyles.h2Light}>How much do you want to pay?</Text>
                </View >
                <View style={styles.container2}>
                    <TextInput
                        style={InputBoxStyle.inputBox}
                        value={amount}
                        placeholder="Enter amount"
                        underlineColorAndroid={'#fff'}
                        placeholderTextColor={'#fff'}
                        onChangeText={(amount) => this.setState({ amount })}
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
