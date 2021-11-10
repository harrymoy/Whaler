import { useState, useEffect } from 'react';
import MetaMaskOnBoarding from '@metamask/onboarding';
import logoSmall from '../images/Logo_200px.png';
import logoMedium from '../images/Logo_300px.png';
import IconButton from '@mui/material/IconButton';
import ConnectButton from '../images/ConnectButton.png';
import './NavBar.css'

declare let window: any;

const NavBar = () => {
    const [address, setAddress] = useState<string>("");

    // useEffect(() => {
    //     if (window.ethereum.isConnected()) {
    //         setChecked(true)
    //     } else {
    //         setChecked(false)
    //     }
    // })

    const connectMetaMask = async () => {
        if (MetaMaskOnBoarding.isMetaMaskInstalled()) {
            let dataList = new Array<string>();
            const walletAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            dataList.push(walletAddress[0], chainId);
            setAddress("Connected Wallet:" + dataList![0]);
            return dataList;
        }
    }

    return (
        <>
            <img srcSet={`${logoSmall} 200w, ${logoMedium} 300w`}
                sizes="(max-width: 220px) 50px, 220px"
                src={logoMedium} alt="Logo" className="logo" />
            <div className="navbar">
                <IconButton aria-label="connect" size="small" onClick={connectMetaMask}
                    sx={{ float: "right", width: "80px", height: "80px", margin: "30px 30px 0 0" }}>
                    <img alt="ConnectButton" src={ConnectButton} className="connectButton"></img>
                </IconButton>
                <p className="address">{address}</p>
            </div>
        </>
    );
}

export default NavBar;