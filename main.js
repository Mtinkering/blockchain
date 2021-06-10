const { Block, Blockchain } = require('./simpleChain');
                            
                            
                            
const block = new Block([1,2,3]); 

const blockchain = new Blockchain();
blockchain.addBlock(block);

console.log(block);
console.log(blockchain.chain);
