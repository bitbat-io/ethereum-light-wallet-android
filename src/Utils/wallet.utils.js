import ethers from 'ethers';

const { HDNode, providers, utils, Wallet } = ethers;

import { TEST_RPC_SERVER, NETWORK } from '../Constants/global.constants';

export const PROVIDER = new providers.InfuraProvider('ropsten', 'BPmY2XJlIpK6RhWMmJW3 ');
/**
 * Util function to generate array of mnemonics
 * @returns {array}
 */
export function GenerateMnemonics() {
    return HDNode.entropyToMnemonic(utils.randomBytes(16)).split(' ');
}

/**
 * Util function to recover wallet from mnemonics
 * @param  {array} mnemonics
 * @returns {wallet}
 */
export function LoadWalletFromMnemonics(mnemonics) {
    if (!(mnemonics instanceof Array) && typeof mnemonics !== 'string')
        throw new Error('invalid mnemonic');
    else if (mnemonics instanceof Array)
        mnemonics = mnemonics.join(' ');

    const wallet = Wallet.fromMnemonic(mnemonics);
    wallet.provider = PROVIDER;
    return wallet;
}

/**
 * Util function to formatBalance
 * @param  {*} balance
 */
export function formatBalance(balance) {
    return utils.formatEther(balance);
}

/**
 * Util function to reduce big number
 * @param  {} items
 */
export function reduceBigNumbers(items) {
    if (!(items instanceof Array)) throw new Error('The input is not an Array');
    return items.reduce((prev, next) => prev.add(next), utils.bigNumberify('0'));
}

/**
 * Util function to calculate gas
 * @param  {*} {gasUsed
 * @param  {*} gasPrice}
 */
export function calculateFee({ gasUsed, gasPrice }) {
    return gasUsed * Number(formatBalance(gasPrice));
}

/**
 * Util function to estimate fee
 * @param  {*} {gasLimit
 * @param  {*} gasPrice}
 */
export function estimateFee({ gasLimit, gasPrice }) {
    return utils.bigNumberify(String(gasLimit)).mul(String(gasPrice));
}