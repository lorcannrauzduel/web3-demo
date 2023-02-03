require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.17',
	networks: {
		hardhat: {},
		mumbai: {
			url: 'https://polygon-mumbai.g.alchemy.com/v2/76EO3smLII5Llm3Zy-i0vOM5_AMd0b9P',
			accounts: [process.env.PRIVATE_KEY]
		}
	}
};
