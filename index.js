import { AppRegistry } from 'react-native';
import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import App from './App';
import AllAccountScene from './allAccount.scene';

const AppRoot = () => (
	<Router>
		<Stack key="root">
			<Scene key="home" initial component={App} title="Home" />
			<Scene key="all_account" component={AllAccountScene} title="All accounts" />
		</Stack>
	</Router>
);

AppRegistry.registerComponent('etherwallet', () => AppRoot);
