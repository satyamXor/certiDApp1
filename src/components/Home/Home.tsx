import React, { Component } from 'react';
import './Home.css';

type State = {
  bunchModal: boolean;
};

export class Home extends Component<State> {
  state: State = {
    bunchModal: false,
  };

  handleClose = () => {
    this.setState({
      bunchModal: false,
    });
  };

  render() {
    return (
      <>
        <div className="homebg">
          <div className="banner">
            <div className="wrapper-container">
              <div className="container">
                <div className="row  align-items-center justify-content-center text-left">
                  <div className="col-lg-10 align-self-end">
                    <h1 className="text-uppercase text-white font-weight-bold">CERTIÐAPP</h1>
                    <div className="divider my-4"></div>
                  </div>
                  <div className="col-lg-10 align-self-baseline">
                    <h4 className="mrg-home">Authenticate Digital Certificate</h4>
                    <p className="text-white">Powered by:BlockchainTechnology</p>

                    <a
                      href="https://eraswap.life/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30"
                    >
                      Issue Blockchain Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container main-section">
            <div className="rows text-center mt30 mb30">
              <div className="header-title">
                <h3>Prevent Unauthorised Certificate Issuance</h3>
              </div>
            </div>
            <div className="card ">
              <div className="card-body bluelight-bg">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <a href="/profile/0x30ba262b4e25a8e7af0c50a83be594c41f16479d">
                      <div className="offer offer-warning">
                        <div className="shape">
                          <div className="shape-text"> 10%</div>
                        </div>
                        <div className="offer-content">
                          <h3 className="lead"> Promotional Incentive </h3>
                          <span className="pro-id">Mahesh Rapelli</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <a href="/profile/0x30ba262b4e25a8e7af0c50a83be594c41f16479d">
                      <div className="offer offer-warning">
                        <div className="shape">
                          <div className="shape-text"> 10%</div>
                        </div>
                        <div className="offer-content">
                          <h3 className="lead"> Promotional Incentive </h3>
                          <span className="pro-id">Mahesh Rapelli</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <a href="/profile/0x30ba262b4e25a8e7af0c50a83be594c41f16479d">
                      <div className="offer offer-warning">
                        <div className="shape">
                          <div className="shape-text"> 10%</div>
                        </div>
                        <div className="offer-content">
                          <h3 className="lead"> Promotional Incentive </h3>
                          <span className="pro-id">Mahesh Rapelli</span>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-md-12 text-right">
                    <a href="/" className="text-right text-black">
                      See All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container main-section">
            <div className="card">
              <div className="card body">
                <div className="rows text-center mt30 mb30">
                  <div className="header-title">
                    <h3>Prevent Unauthorised Certificate Issuance</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 description align-items-center justify-content-center Padd_edit">
                    <p className="description wow animated fadeIn delay-2s p_edit animated">
                      CertiDApp utilizes Elliptic Curve cryptography and Ethereum Blockchain’s
                      immutability, IPFS decentralized file storage to feature transparent
                      verification of certificates.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 Padd_edit wow animated fadeInUp delay-2s animated">
                    <img src="./images/3-01.jpg" alt="img1" width="80%" />
                    {/* <img className="white-logo" src="./images/whitelogo.png" alt="white-logo" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container main-section ">
            <div className="card ">
              <div className="card-body bluelight-bg">
                <div className="rows text-center mt30 mb30">
                  <div className="header-title">
                    <h3>Durable, Reliable & Secured</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 description align-items-center justify-content-center Padd_edit">
                    <p className="description wow animated fadeIn delay-2s p_edit animated">
                      CertiÐApp solves the authenticity-related problems using Kerckhoff's Principle
                      of Cryptography. Here, instead of traditionally having complicated and secret
                      certificate printing process, we use a publicly known secure Elliptic Curve
                      Digital Signature Algorithm (ECDSA) which is used in SSL.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 Padd_edit wow animated fadeInUp delay-2s animated">
                    <img src="./images/2-01.jpg" alt="img1" width="80%" />
                    {/* <img className="white-logo" src="./images/whitelogo.png" alt="white-logo" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container main-section">
            <div className="card">
              <div className="card body">
                <div className="rows text-center mt30 mb30">
                  <div className="header-title">
                    <h3>Issue Certificate for any Industry</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 description align-items-center justify-content-center Padd_edit">
                    <p className="description wow animated fadeIn delay-2s p_edit animated">
                      CertiÐApp uses an advanced technique called RLP to record certificate data on
                      Blockchain. This let’s certificate issuers include any kind of data in the
                      certificate
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 Padd_edit wow animated fadeInUp delay-2s animated">
                    <img src="./images/1-01.jpg" alt="img1" width="80%" />
                    {/* <img className="white-logo" src="./images/whitelogo.png" alt="white-logo" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="navbar-transparent px-md-0 img pb-md-5 navbar-wrap bg-transparent-overlay "
              style={{
                backgroundImage: 'url(' + 'images/Tech.jpg' + ')',
              }}
            >
              <div className="overlay extra_overlay"></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-9 mx-auto mt80">
                    <h4 className="card-title mt80 mb40">
                      CertiÐApp certificates support Multiple Signatures, which means that multiple
                      certifying authorities can sign on one certificate.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container main-section Features mt40 mb40">
            <div className="card ">
              <div className="card-body bluelight-bg">
                <div className="rows text-center mt30 mb30">
                  <div className="header-title">
                    <h3>Features of CertiÐApp</h3>
                  </div>
                </div>
                <div className="row mt40">
                  <div className="col-sm-12 col-md-12 col-lg-4  text-center">
                    <span className="fa fa-cog icon"></span>
                    <p className="mt20">
                      Customizable certificates as per your requirement, with a feature of adding
                      multiple signatures
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4  text-center">
                    <span className="fa fa-cog icon"></span>
                    <p className="mt20">
                      No certificate issuing fees charged on CertiÐApp to certifying authority
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4  text-center">
                    <span className="fa fa-cog icon"></span>
                    <p className="mt20">
                      Your certificate gets stored on Highly Decentralized Secured Ethereum
                      Blockchain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12  text-center">
            <p className="mt20 pdb20">Copyright 2020 Era Swap</p>
          </div>
        </div>
      </>
    );
  }
}
