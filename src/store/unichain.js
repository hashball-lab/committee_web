import * as ethers from "ethers";
import drawwinnerAbi from "../json/drawwinner_json"
import developersubmitAbi from "../json/developersubmit_json"
import currentsubmitAbi from "../json/currentsubmit_json"
import committeesAbi from "../json/committees_json"
import attachsubmitAbi from "../json/attachsubmit_json"
import alternatesubmitAbi from "../json/alternatesubmit_json"

import {makeAutoObservable} from 'mobx'

class Wallet{
    
    providers = new ethers.providers.JsonRpcProvider('https://sepolia.unichain.org')
    
    
    committeescontractAddress = "0xCa099E626888D055A0557a4733dcb71a2aDb3604"
    currentsubmitcontractAddress = "0x043c5eBC1A9C24EF0e9E4c13e574DAeDA4FAF569"
    alternatesubmitcontractAddress = "0x1b20589C84C07f1d2c018332C9F8E69053d3C87c"
    attachsubmitcontractAddress = "0xA360CFd8FaA6592a85742b7C353D0a9e1d223354"
    developersubmitcontractAddress = "0x85E7ECAb06C417bD4264d472926b896544e9e331"
    drawwinnercontractAddress = "0x1744fe84653d5071E4edaCac129F2AaD65fEd60C"

    chainID = 1301

    drawwinnercontract = new ethers.Contract(this.drawwinnercontractAddress, drawwinnerAbi, this.providers)
    developersubmitcontract = new ethers.Contract(this.developersubmitcontractAddress, developersubmitAbi, this.providers)
    currentsubmitcontract = new ethers.Contract(this.currentsubmitcontractAddress, currentsubmitAbi, this.providers)
    committeescontract = new ethers.Contract(this.committeescontractAddress, committeesAbi, this.providers)
    attachsubmitcontract = new ethers.Contract(this.attachsubmitcontractAddress, attachsubmitAbi, this.providers)
    alternatesubmitcontract = new ethers.Contract(this.alternatesubmitcontractAddress, alternatesubmitAbi, this.providers)
    
    constructor(){
        makeAutoObservable(this)
    }
    reset() {
        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        this.signer = this.provider.getSigner()
        this.drawwinnercontract = new ethers.Contract(this.drawwinnercontractAddress, drawwinnerAbi, this.signer)
        this.developersubmitcontract = new ethers.Contract(this.developersubmitcontractAddress, developersubmitAbi, this.signer)
        this.currentsubmitcontract = new ethers.Contract(this.currentsubmitcontractAddress, currentsubmitAbi, this.signer)
        this.committeescontract = new ethers.Contract(this.committeescontractAddress, committeesAbi, this.signer)
        this.attachsubmitcontract = new ethers.Contract(this.attachsubmitcontractAddress, attachsubmitAbi, this.signer)
        this.alternatesubmitcontract = new ethers.Contract(this.alternatesubmitcontractAddress, alternatesubmitAbi, this.signer)
      }

}
const UnichainWallet = new Wallet()

export {UnichainWallet}