import React, { Component } from 'react';
import './RegisterCertificate.css';
// import { Link } from 'react-router-dom';
import {  Alert } from 'react-bootstrap';

type State = {
  bunchModal: boolean;
};

export class RegisterCertificate extends Component<State> {
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
      <div className="homebg">
       


        <div className="container main-section">
          <div className="rows text-center mt80 mb30">
            <div className="header-title">
              <h3>REGISTER CERTIFICATE</h3>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-9 mx-auto mt40 mb40">
              <div className="card card-round ">
                  <div className="row">
                    <div className="col-sm-12 text-cente">
                      <p className="description wow animated fadeIn delay-2s p_edit animated">
                        CertiDApp utilizes Elliptic Curve cryptography and Ethereum Blockchain’s
                        immutability, IPFS decentralized file storage to feature transparent
                        verification of certificates.
                      </p>
                      <p>If you don't have a certificate hex string and you want a certificate,
                         then you can ask any organisation around you that gives traditional printed
                          certificates to switch to blockchain based secure certificates using CertiÐApp.</p>
                     </div>
                  </div>
               </div>

               <h4 className="mt80 font-weight-bold mb20">Paste your signed certificate in the below box:</h4>  
               <textarea  className="card-round col-md-12" ></textarea>
               <Alert variant="danger"   className="mt40">
                  <p>If you want to register your certificate, you will
                     need Metamask installed. If you are here only to view certificates,
                      installing Metamask is not necessary</p>
                  
                </Alert>
                <div className="">
                     <a href="/"  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30">
                     Register Certificate
                       </a>
                </div>

            </div>
          </div>
        </div>










      </div>
    );
  }
}
