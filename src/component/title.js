import React, { useState, useEffect}  from 'react'
import '../styles/title.css'
import logo_img from '../icons/logo.svg'
import unichain_img from '../icons/unichain.svg'
import wallet_img from '../icons/wallet.svg'
import {UnichainWallet } from '../store/unichain';
import * as ethers from "ethers";
import AlertsNetwork from './alertsNetwork';
import AlertsWallet from './alertsWallet';
import AlertsConnected from './alertsConnected'

const Title = ({accounts, setAccounts}) => {

    const [names, setNames] = useState(accounts);
    const isConnected = Boolean(accounts[0]);
    const [alertsNetworkstatus, setalertsNetworkstatus] = useState(0);
    const [alertsWalletstatus, setalertsWalletstatus] = useState(0);
    const [alertsConnectedstatus, setalertsConnectedstatus] = useState(0);


    function HandString(){
      if(names.length >12){
        let str = names;
        // console.log(names)
        let pre = str.substr(0,6);
        let end = str.substr(str.length - 4, 4);
        return pre+'...'+ end;
      }else{
        return names;
      }

    }
    function disPlayNetwork(){
      setalertsNetworkstatus(1);
    }
    function disPlayWallet(){
      setalertsWalletstatus(1);
    }
    function disPlayConnected(){
      setalertsConnectedstatus(1);
    }

    async function connectAccount() {
        if (window.ethereum) {
          try {
                let accounts = await window.ethereum.request({
                  method: "eth_requestAccounts"
                });
                await checkNetwork();
                setAccounts(accounts[0]);
                setNames(accounts[0]);
                // console.log(accounts[0]);
                setalertsWalletstatus(0);
              } catch (error) {
                console.log(error)
                console.warn("Please authorize to access tour account");
              };
        } else {
          alert("Pls Install MetaMask or Okx wallet!");
        };
    }

    async function checkNetwork(){
        // const provider = new ethers.BrowserProvider(window.ethereum);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        let chain = await provider.getNetwork();
          if(chain.chainId != 1301){
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [
                {
                chainId: "0x515"
                }
              ]
            });
            
          } catch (error) {
            try {
              await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: "0x515",
                      chainName: 'UnichainTest',
                      rpcUrls: ['https://sepolia.unichain.org'],
                      blockExplorerUrls: ['https://sepolia.uniscan.xyz/'],
                      nativeCurrency: {
                        name: 'ETH',
                        symbol: 'ETH',
                      },
                    }
                  ]
                })
            } catch (ee) {
              alert("Please add UniChain Testnet manually");
            }
            
          };
        }
        UnichainWallet.reset()
    }

    async function disConnect(){
        setAccounts([]);
        setNames([]);
        if (window.ethereum) {
          setalertsConnectedstatus(0);
          await window.ethereum.request({ method: 'wallet_disconnect' });
        } else {
          console.error('No Ethereum wallet found.');
        }
    }
    

    return (
      <div className='title_contain'>
        <div className='titles'>
                    <div className='title_logo'>
                        <img src={logo_img}/>
                        <li>Committee & Drawing</li>
                    </div>
                    <div className='network_wallet'> 
                        <div className='network'>
                            <img src={unichain_img} onClick={disPlayNetwork}/>
                        </div>
                        <div className='connect_wallet'>
                        {isConnected ? <li onClick={disPlayConnected}><HandString /></li> : <li onClick={disPlayWallet}>Connect Wallet</li>}
                            
                        </div>
                        {isConnected ? <div className='connect_wallet_mobile' style={{background:'linear-gradient(to right, #CC3100, white)', width:'26px', height:'26px', borderradius:'13px'}} onClick={ disPlayConnected}>
                                       </div>
                                     : <div className='connect_wallet_mobile' onClick={ disPlayWallet}>
                                        <img src={wallet_img}/>
                                      </div>}
                    </div>
        </div>
        {alertsNetworkstatus === 1 && <AlertsNetwork setalertsNetworkstatus={setalertsNetworkstatus}/>}
        {alertsWalletstatus === 1 && <AlertsWallet setalertsWalletstatus={setalertsWalletstatus} connectAccount={connectAccount}/>}
        {alertsConnectedstatus === 1 && <AlertsConnected setalertsConnectedstatus={setalertsConnectedstatus} disConnect={disConnect} accounts={accounts}/>}
      </div>
    )
}

export default Title