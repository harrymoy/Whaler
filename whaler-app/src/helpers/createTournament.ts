import { ethers } from 'ethers';
import Whaler from '../abis/Whaler.json';

declare let window: any;

const contractAddress = "0x1CfeA7622b6F318f4d43Afa4487F442bF2168701";

const connectContract = async (contractAddress: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    var whalerContract = new ethers.Contract(
        contractAddress,
        Whaler,
        signer,
    )

    return whalerContract
}

const createTournament = async () => {
    const Whaler = await connectContract(contractAddress);
    const createTournamentResult = await Whaler.createTournament();
    console.log("Created Tournament: ", createTournamentResult);
    return createTournamentResult;
}

export { createTournament };