import Caver from 'caver-js'

const deployedABI = require('./deployedABI.json')

const TEST_NET = 'https://api.baobab.klaytn.net:8651'

export const config = {
  rpcURL: TEST_NET
}

const DEPLOYED_ADDRESS = '0x427fadd816762522d88d1c794b592e45260976c1' // testnet

const cav = new Caver(config.rpcURL)

const getContractInstance = () => {  
  const contractInstance = deployedABI
  && DEPLOYED_ADDRESS
  && new cav.klay.Contract(deployedABI, DEPLOYED_ADDRESS)
  return contractInstance
}

export {cav, getContractInstance}
