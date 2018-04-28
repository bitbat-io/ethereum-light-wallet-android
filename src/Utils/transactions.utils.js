import ethers from 'ethers';

const { utils } = ethers;

import {
    DEFAULT_GASLIMIT,
    DEFAULT_GASPRICE,
} from '../Constants/global.constants';

/**
 * Util function to create transaction
 * @param  {} to
 * @param  {} value
 * @param  {} gasLimit=DEFAULT_GASLIMIT
 * @param  {} options={}
 */
export function createTransaction(to, value, gasLimit = DEFAULT_GASLIMIT, options = {}) {
    if (!value) throw new Error('The transaction value is required.');
    else if (!(Number(value) > 0)) throw new Error('The transaction value is invalid.');
    else if (isNaN(gasLimit)) gasLimit = DEFAULT_GASLIMIT;
    const gasPrice = DEFAULT_GASPRICE;
    value = utils.parseEther(value);
    return { gasPrice, ...options, to, gasLimit, value };
}

/**
 * Util function to validate transaction
 * @param  {} transaction
 */
export function isValidTransaction(transaction) {
    return transaction instanceof Object
        && Number(transaction.value) > 0 && Number(transaction.gasLimit) > 0 && typeof transaction.to === 'string';
}