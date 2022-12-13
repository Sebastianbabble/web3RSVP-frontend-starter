import abiJSON from "./Web3RSVP.json";
import {ethers} from "ethers";

function connectContract() {
    const contractAddress = "0xe1Df6Ea1C9b0C6880AB542BFFC8D96649D747451";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try{
        const {ethereum} = window;

        if(ethereum){
            //checking for eth objext in the window
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            rsvpContract = new ethers.Contract(contractAddress,contractABI,signer);
        } else{
            console.log("Ethereum object doesn't exist!");
        }
    } catch (error){
        console.log("ERROR:", error);
    }
    return rsvpContract;
}
export default connectContract;