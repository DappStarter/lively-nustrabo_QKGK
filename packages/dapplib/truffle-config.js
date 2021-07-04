require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name rescue still hub include arch orange gather'; 
let testAccounts = [
"0x7ecbfe62356318768a05b0361c5a9b8392a29a20d8947e764b7ce95528e2db7f",
"0x9581589e00e98055ab5b616bdb0e94940c9ba447c5c826641361f8569ad2e51a",
"0x84e53aed7a84efb3a39f3077362bc3027f2944bc26a4159583ed4e6be3b5e95d",
"0xe7fa1eac85760b10c0f9e2877c05e66cb64217301bcb3bf9cf9754eec9ca3a05",
"0xdf89e89a2916760adc0c0a15b86163de93db01a439874ad4a7a4458382e61c5f",
"0x74ff1533454268db99cb5f35235e9dd0c5f0d0919ddf277a0920e69507ded673",
"0x0cbcc617bf9d23d0d7d450c62301e3a16aaf21dc7cecd78f0797b90223bf31f0",
"0x9b19c03ec6cff41ee963ab622ee5eae35edef88f0368dca02cdc3b9b79d9860a",
"0xea8b001b1c0c06c2e408e63e4615633836323f6eca54966f788b093af1efd4af",
"0x9cc5bb7de5ef2c6eaddad32bc84282d11e7f7eaa8e3a962552b5ccac44cc2825"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

