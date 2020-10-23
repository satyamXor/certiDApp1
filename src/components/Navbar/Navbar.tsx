import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import ethers from 'ethers';
import Swal from 'sweetalert2';
import WalletConnectProvider from '@walletconnect/web3-provider';
import copy from 'copy-to-clipboard';

export function NavbarMain() {
  const [Address, setAddress] = useState(null);
  const [copied, setCopied] = useState(false);

  // async function resolveAddress() {
  //   let address = 'connect to wallet';
  //   if(window.wallet){
  //     if(window.wallet.address)address = window.wallet.address;
  //     else address = await window.wallet.getAddress();
  //   }
  //   return address;
  // }

  async function loadWallet() {
    try {
      //  Create WalletConnect Provider
      const walletConnectProvider = new WalletConnectProvider({
        rpc: { 5196: 'https://testnet.eraswap.network' },
        // infuraId: "b81341e3ab894360a84f3fa640ab985e" ,
        qrcode: true,
      });
      await walletConnectProvider.enable();
      const provider = new ethers.providers.Web3Provider(walletConnectProvider);
      console.log(provider.getSigner());
      const wallet = await provider.getSigner();
      const address = await wallet.getAddress();
      setAddress(address);
      window.wallet = wallet;
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  }

  const loadMetamask = async () => {
    try {
      if (window.ethereum) {
        //@ts-ignore
        window.ethereum.enable();
        const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await metamaskProvider.getNetwork();
        if (network.name === 'homestead') {
          network.name = 'Main Ethereum Network';
          alert('please connect with https://test.eraswap.network');
        } else if (network.chainId === 5196) {
          network.name = 'Test EraSwap Network';
        } else if (network.chainId === 5197) {
          network.name = 'Main Era Swap Network';
        }
        console.log(ethers.Wallet);
        if (network.chainId === 5196 || network.chainId === 5197) {
          const wallet = await metamaskProvider.getSigner();
          console.log('Wallet : ', wallet);
          const address = await wallet.getAddress();
          setAddress(address);
          console.log('Address :', address);
          window.wallet = wallet;
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  function Wallet() {
    return (
      <div style={{ width: '400px', marginTop: '10px' }}>
        <p>Use Account From </p>
        <div className="dropdown-divider "></div>
        <div className="row">
          <div className="col-4 text-center  wallet " onClick={loadMetamask}>
            <img
              className="my-1"
              src="https://docs.metamask.io/metamask-fox.svg"
              width="70px"
              alt="metamsak"
            />
            <h6>MetaMask</h6>
          </div>
          <div className="col-4 text-center   wallet " onClick={loadWallet}>
            <img
              src="https://avatars0.githubusercontent.com/u/37784886"
              width="70px"
              alt="walletconnect"
            />
            <h6>WalletConnect</h6>
          </div>
          <div
            className="col-4 text-center wallet "
            onClick={() => window.open('https://eraswap.life/', '', 'width=1001,height=650')}
          >
            <img className="my-3" src="./images/eralogo.png" width="70px" alt="eraswap" />
            <h6>EraSwap.life</h6>
          </div>
        </div>
        <div className="dropdown-divider "></div>
        <a
          href="https://eraswap.life/create-new-wallet"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          Don’t have an Ethereum account?
        </a>
      </div>
    );
  }

  function Account() {
    return (
      <div style={{ width: '400px', marginTop: '10px' }}>
        <p>ACTIVE ACCOUNT</p>
        <div className="dropdown-divider "></div>

        {copied ? (
          <i className="fa fa-check-circle" aria-hidden="true"></i>
        ) : (
          <i
            className="fa fa-clone"
            style={{ marginLeft: 8, float: 'right', fontSize: '1.5em' }}
            onClick={() => {
              copy(Address);
              setCopied(true);
              Swal.fire({
                position: 'bottom-end',
                title: 'Copied',
                showConfirmButton: false,
                timer: 1000,
              });
            }}
          ></i>
        )}
        <p>
          <i className="fa fa-dot-circle-o text-success"></i> You are Connected with : {Address}
        </p>
        <div className="dropdown-divider "></div>
        <button
          type="button"
          className="btn btn-outline-danger btn-block"
          onClick={() => {
            window.wallet = undefined;
            setAddress(null);
            window.location.reload();
          }}
        >
          DisConnect
        </button>
      </div>
    );
  }
  function CustomWallets(e) {
    setTimeout(() => {
      const message = e.data;
      if (message.substring) {
        if (message.substring(0, 2) === '0x') {
          if (window.wallet) setAddress(window.wallet.address);
        }
      }
    }, 0);
  }
  (async () => {
    if (window.wallet) {
      if (window.wallet.address) setAddress(window.wallet.address);
      else setAddress(await window.wallet.getAddress());
    }
  })();

  useEffect(() => {
    window.addEventListener('message', (e) => {
      CustomWallets(e);
    });
    return () => {
      window.removeEventListener('message', (e) => {
        CustomWallets(e);
      });
    };
  }, [Address]);

  return (
    <Navbar expand="lg" bg="red" className="color-nav" variant="light" fixed="top">
      <Navbar.Brand href="/">
        <img className="white-logo" src="./images/whitelogo.png" alt="white-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-nav ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="https://certidapp.com/" target="_blank">
            Faq
          </Nav.Link>
          <NavDropdown
            title="Blockchain Certificate"
            id="collasible-nav-dropdown"
            className="btn btn-primary btn-sm js-scroll-trigger combtn"
          >
            <NavDropdown.Item>
              <Link to="/RegisterCertificate">Register Certificate</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/ViewCertificate">View Certificate</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/ListAuthorities">List Authorities</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/SignCertificate">Sign Certificate</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="https://certidapp.com/" target="_blank">
            Blockchain Survey
          </Nav.Link>

          <Nav>
            <div className="dropdown nav mr10  ">
              <button
                className=" btn btn-primary btn-xl js-scroll-trigger combtn con-wabtn"
                type="button"
                id="dropdownMenu"
                data-toggle="dropdown"
              >
                {!Address ? (
                  'Connect to Wallet'
                ) : (
                  <>
                    <i className="fa fa-circle text-success"></i>&nbsp;{Address}
                  </>
                )}
              </button>
              <div
                className="dropdown-menu px-2 dropdown-menu-right "
                aria-labelledby="dropdownMenu"
              >
                {!Address ? <Wallet /> : <Account />}
              </div>
            </div>
          </Nav>
          {/* <Nav.Link href="https://eraswaptoken.io/pdf/eraswap_whitepaper.pdf" target="_blank">Whitepaper</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
