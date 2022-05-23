import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TestDevo',
  tokenName: 'Devo',
  tokenSymbol: 'DEV',
  hiddenMetadataUri: 'ipfs:/QmdWRLttn57JgTC2zzR938hXTaLwDr1bTr5tJix2NmQDP8/hidden.json',
  maxSupply: 100,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.06,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.0666,
    maxMintAmountPerTx: 6,
  },
  contractAddress: "0xbD279566B5DB4ee7aD99B80091041A8557519B54",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
