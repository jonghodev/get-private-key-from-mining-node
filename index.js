const Web3 = require('web3')

const web3 = new Web3();
// TODO 1. Provider 주소를 넣어주세요.
web3.setProvider('http://106.240.251.126:10188');

// TODO 2. keystore/account-1 의 json 값을 넣어주세요.
const data = {"address":"ff34c241872d66bb0d000753370df45e4a323535","crypto":{"cipher":"aes-128-ctr","ciphertext":"8fc478441d26acaf4ca6527cce5baf84f86b7313abe54c2faa7835361fa50f92","cipherparams":{"iv":"b6aae02b48db8636807cadc7e8f72ad1"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"f6f8306f7d2a4177d6343c29e846fb6798b7b7aadb05d76d1d8ef6c138559866"},"mac":"c2230c5deb15da878f1b94eb4f1b6d417b7636762b0c678c19f79d450bad7f14"},"id":"1b3352e8-cf14-4b51-8e02-6b6f9db53a9f","version":3}
const res = web3.eth.accounts.decrypt(data, 'demo');
console.log(res)
