require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food stock rice place horn hard light army gather'; 
let testAccounts = [
"0x3c841803858143e254ec678e22cb37d65968745095ad466a2a5e0c33c05291bd",
"0xd2b5b0bd7e3898a2d0b103fcdbe01d8b7a2c410f1f571e4474d99c64632bbaa9",
"0x6409370e77dd8a47ef1882128acc6fcc317ebac3853060c29afebcdaa60ec960",
"0xccfc6f0a483e3e1b7b6acd5b419163bafb7e65946911e5c8e2b9a0e8dda29d2f",
"0xa56a7f785ea8148a0f45620788efae1019ca2b9d9963db3183e0cd3f55c0eac9",
"0x033a3f9e295a1046694645978946849bf8aae53db1483faa733ad5ee2a70c7a8",
"0x979ad6ac4706cc41fd64f1ca36ff817d52fd5aca0e41e5646c4378cf64733cf5",
"0x1eda10e932a216c765e554432a45caa32e252545f05ec0309c43df5d401df666",
"0x8f135d496b7f26a28d234981c9f07a65eb678c34f384ded5ffa393be6f1fc96c",
"0x67519fb958b5803e557c1ef5937e652aa58c727cb5760135dd9e01fa0f75d393"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
