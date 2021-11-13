import { useState, useEffect } from 'react';
import MetaMaskOnBoarding from '@metamask/onboarding';
import logoSmall from '../images/Logo_200px.png';
import logoMedium from '../images/Logo_300px.png';
import IconButton from '@mui/material/IconButton';
import ConnectButton from '../images/ConnectButton.png';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css'
import '@fontsource/roboto';


declare let window: any;

const NavBar = () => {
    const [address, setAddress] = useState<string>("");

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
            <Link to="/">
                <img srcSet={`${logoSmall} 200w, ${logoMedium} 300w`}
                    sizes="(max-width: 220px) 50px, 220px"
                    src={logoMedium} alt="Logo" className="logo" />
            </Link>
            <p className="address">{address}</p>
            <div className="navbar">
                <ul>
                    <li style={{ marginRight: "50px" }}>
                        <IconButton aria-label="connect" size="small" onClick={connectMetaMask}
                            sx={{ width: "80px", height: "80px", display: "inline" }}>
                            <img alt="ConnectButton" src={ConnectButton} className="connectButton"></img>
                        </IconButton>
                    </li>
                    <li className="orderBook">
                        <Link to="/order">
                            <Typography variant="h3" sx={{ fontFamily: "Roboto", display: "inline" }}>
                                Order Book
                            </Typography>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;