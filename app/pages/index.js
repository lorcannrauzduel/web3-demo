import { useEffect, useState } from 'react';
import quickFoodTokenContractData from '../../artifacts/contracts/QuickFoodToken.sol/QuickFoodToken.json';
import { ethers } from 'ethers';

const Home = () => {
	const [connectedWallet, setConnectedWallet] = useState(null);
	const [amountToken, setAmountToken] = useState(0);

	useEffect(() => {
		if (window.ethereum === undefined) alert('Metamask is not installed');
		if (window.ethereum.selectedAddress !== null)
			setConnectedWallet(window.ethereum.selectedAddress);
		window.ethereum.on('accountsChanged', function (accounts) {
			setConnectedWallet(accounts[0]);
		});
	}, []);

	const connectWallet = async () => {
		const accounts = await ethereum.request({
			method: 'eth_requestAccounts'
		});
		const currentWallet = accounts[0];
		setConnectedWallet(currentWallet);
	};

	const buyToken = async () => {
		// TODOS : Récupérer l'instance du contrat, l'abi pour pouvoir executer la fonction
	};

	return (
		<>
			<button onClick={connectWallet}>
				{connectedWallet !== null ? connectedWallet : 'Connect wallet'}
			</button>
			<br />
			<br />
			<input
				type='number'
				onChange={(e) => setAmountToken(e.target.value)}
			/>
			<button onClick={buyToken}>Buy Token</button>
		</>
	);
};

export default Home;
