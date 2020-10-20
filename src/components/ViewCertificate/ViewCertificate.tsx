import React, { Component } from 'react';
import './ViewCertificate.css';
import { Link } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown, Alert, Table, Row, Col,Form,Modal } from 'react-bootstrap';
import { CertificateBox } from '../CertificateBox';

type State = {
  bunchModal: boolean;
};

export class ViewCertificate extends Component<State> {
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
              <h3>VIEW CERTIFICATE</h3>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-9 mx-auto mt40 mb40">
              <div className="card card-round ">
                  <div className="row">
                    <div className="col-sm-12 text-cente">
                      <p className="description wow animated fadeIn delay-2s p_edit animated">
                      This section is used to view an already registered certificate. Using the below box, 
                      you can view an already registered certificate with CertiÐApp Smart Contract on Ethereum Blockchain. 
                      You need a certificate hash to proceed. If you don't have a certificate hash, please
                       ask the certificate holder (whose certificate you want to see) to give you hash of their certificate.
                      </p>
                      
                     </div> 
                  </div>
               </div>

               <h4 className="mt80 font-weight-bold mb20">Paste the certificate hash in the box below:</h4>  
               <textarea  className="card-round col-md-12" placeholder="Enter Certificate Hash"></textarea>
               
               <div className="card card-round mt40 bluelight-bg">
                  <div className="row">
                    <div className="col-sm-12 text-cente">
                      <h3 className="">Or you can also check out some recent certificate Hashes</h3>
                      <p className="mt20"> 0x34c4204b0f808103f69ee547ab9567e2d06b324e2e5532cd765 <a href='/' className="btn btn-light btn-sm"><i className="fa fa-file text-dark" aria-hidden="true"></i></a> </p>
                      <p className=""> 0x34c4204b0f808103f69ee547ab9567e2d06b324e2e5532cd765 <a href='/' className="btn btn-light btn-sm"><i className="fa fa-file text-dark" aria-hidden="true"></i></a></p>
                      <p className=""> 0x34c4204b0f808103f69ee547ab9567e2d06b324e2e5532cd765 <a  href='/' className="btn btn-light btn-sm"><i className="fa fa-file text-dark" aria-hidden="true"></i></a></p>
                    </div>
                  </div>
               </div>
            <div className=""><a href="/"  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30">Verify Certificate</a></div>

      <CertificateBox/>
            </div>
          </div>
        </div>

      











   </div>
    );
  }
}
