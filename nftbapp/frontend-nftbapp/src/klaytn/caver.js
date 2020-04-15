import Caver from 'caver-js'

const AuctionsABI = require('@/contracts/Auctions.json').abi
const MyNFTABI = require('@/contracts/MyNFT.json').abi

const TEST_NET = 'https://api.baobab.klaytn.net:8651'

export const config = {
  rpcURL: TEST_NET
}

const MYNFT_CA = '0x903fc47bfd3223fe8331a70d1c405a0337c9b48b'
const AUCTIONS_CA = '0x1e77e61bdc1a0a1a9038c19c45fbcd164a11946a'

const cav = new Caver(config.rpcURL)

const getMyNFTInstance = () => {  
  const contractInstance = MyNFTABI
  && MYNFT_CA
  && new cav.klay.Contract(MyNFTABI, MYNFT_CA)
  return contractInstance
}

const getAuctionsInstance = () => {
  const contractInstance = AuctionsABI
  && AUCTIONS_CA
  && new cav.klay.Contract(AuctionsABI, AUCTIONS_CA)
  return contractInstance
}

export {cav, MYNFT_CA, AUCTIONS_CA, getMyNFTInstance, getAuctionsInstance}
