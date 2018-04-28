import React, { Component } from 'react';
import { Text } from 'react-native';
import { QRScannerView } from 'ac-qrcode';

export default class QRScanner extends Component {
    render() {
        return (

            < QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}
                renderTopBarView={() => this._renderTitleBar()}
                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    _renderTitleBar() {
        return (
            <Text
                style={{ color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12 }}
            >Here is title bar</Text>
        );
    }

    _renderMenu() {
        return (
            <Text
                style={{ color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12 }}
            >Here is bottom menu</Text>
        )
    }

    barcodeReceived(e) {
        alert('dd');
        //console.log(e)
    }
}