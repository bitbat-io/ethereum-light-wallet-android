import SInfo from 'react-native-sensitive-info';

export async function PersistWallet(wallet) {
    const StorableWallet = {
        walletName: wallet.walletName,
        address: wallet.address,
        privateKey: wallet.privateKey,
    }

    const pushData = await JSON.stringify(StorableWallet);

    SInfo.setItem(`EtherWallet_${StorableWallet.walletName}`, pushData, {
        sharedPreferencesName: 'ethereumWalletSharedPrefsSecure13',
        keychainService: 'ethereumWalletSecure13'
    });
}

export async function FetchAllWallets() {
    const wallets = await SInfo.getAllItems({
        sharedPreferencesName: 'ethereumWalletSharedPrefsSecure13',
        keychainService: 'ethereumWalletSecure13'
    });
    const walletList = [];

    Object.keys(wallets).map((item) => {
        walletList.push(JSON.parse(wallets[item]));
    })

    return walletList;
}