import { ethers } from "ethers";

import abi from '../artifacts/contracts/Keyboards.sol/Keyboards.json'

const contractAddress = '0xd9eAC250bE92eF5d4cbA161Fd79425B4F6554596';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
