/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, ActivityIndicator, ScrollView } from 'react-native';
import Geth from 'react-native-geth';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

// Ethereum Network Frontier
const Eth = async () => {
	const geth = new Geth();
	// start node
	const start = await geth.start();

	if (start) {
		console.log('Ethereum live P2P node started', geth);
		return geth;
	}
};

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			GethObj: props.geth,
			accounts: [],
		};
	}

	componentDidMount = async () => {
		const result = await this.state.GethObj.listAccounts();
		this.setState({ accounts: result });
	};

	render() {
		const { accounts } = this.state;

		return (
			<View style={styles.container}>
				<ScrollView style={{ flex: 1 }}>
					{/* <View style={{ height: 100 }}>
						{!GethObj ? (
							<ActivityIndicator animating size={'large'} />
						) : (
							<View>
								<Text style={styles.instructions}>Ethereum live P2P node started</Text>
								<Button title={'Stop'} color={'red'} onPress={() => this._stopAccount()} />
							</View>
						)}
					</View> */}

					{/* <View
						style={{
							width: 300,
							height: 100,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<TextInput
							style={{ width: 200 }}
							value={passphrase}
							onChangeText={passphrase => this.setState({ passphrase })}
							placeholder={'enter passphrase'}
						/>
						<Button
							title={'create account'}
							onPress={() => {
								this._createNewAccount();
							}}
						/>
					</View> */}
					{accounts.map(item => {
						return (
							<View style={{ borderWidth: 1, padding: 5 }}>
								<Text>Id: {item.account}</Text>
								<Text>Address: {item.address}</Text>
							</View>
						);
					})}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
