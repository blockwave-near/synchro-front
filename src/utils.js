import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';
import getConfig from './config';

const nearConfig = getConfig('development');

const BNEAR_STAKING = 'staking.bnear.synchro.testnet';
const BNEAR_TOKEN = 'bnear.synchro.testnet';
const CUSTODY_BNEAR = 'custody_bnear.synchro.testnet';
const MARKET = 'market.synchro.testnet';
const OVERSEER = 'overseer.synchro.testnet';

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  window.near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(window.near)

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()

  window.account = await window.walletConnection.account();

  // Initializing our contract APIs by contract name and configuration
  window.bnearStaking = new Contract(window.account, BNEAR_STAKING, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['get_account_stake_reward', 'get_account_staked_balance', 'get_account_unstaked_balance', 'get_account'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['deposit_and_stake', 'unstake', 'unstake_reward', 'withdraw_all'],
    sender: window.walletConnection.account(),
  })

  window.bnearToken = new Contract(window.account, BNEAR_TOKEN, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['ft_balance_of'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: [],
    sender: window.walletConnection.account(),
  })

  window.custody_bnear = new Contract(window.account, CUSTODY_BNEAR, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['get_borrower'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['withdraw_collateral'],
    sender: window.walletConnection.account(),
  })

  window.market = new Contract(window.account, MARKET, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['get_cofing', 'get_state', 'get_balance', 'get_borrower_info'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['borrow_stable', 'repay_stable', 'claim_reward', 'deposit_stable', 'redeem_stable'],
    sender: window.walletConnection.account(),
  })

  window.overseer = new Contract(window.account, OVERSEER, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['get_state', 'get_borrow_limit'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['lock_collateral', 'unlock_collateral'],
    sender: window.walletConnection.account(),
  })
}

export function logout() {
  window.walletConnection.signOut()
  // reload page
  window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  window.walletConnection.requestSignIn(BNEAR_STAKING)
}
