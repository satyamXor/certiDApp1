import React, { Component } from 'react';
import './ViewCertificate.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Alert, Table, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { Form } from 'react-bootstrap';

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
                      <p className="mt20"> 0x34c4204b0f808103f69ee547ab9567e2d06b324e2e5532cd765 <a className="btn btn-light btn-sm"><i className="fa fa-file text-dark" aria-hidden="true"></i></a>
 </p>
                      <p className=""> 0x34c4204b0f808103f69ee547ab9567e2d06b324e2e5532cd765 <a className="btn btn-light btn-sm"><i className="fa fa-file text-dark" aria-hidden="true"></i></a>
</p>
                      <p className=""> 0x34c4204b0f808103f69ee547ab9567e2d06b324e2e5532cd765 <a className="btn btn-light btn-sm"><i className="fa fa-file text-dark" aria-hidden="true"></i></a>
</p>
                     </div>
                  </div>
               </div>

                <div className="">
                     <a href=""  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30">
                     Verify Certificate
                       </a>
                </div>


                <div className="card card-round ">
                  <div className="row pinside60">
                    <div className="col-sm-12 text-cente">
                      <h2 className="text-blue text-weiight-bold">Cerficate of Completion</h2>
                      <h6 className="text-blue">is awarded to</h6>
                      <h5 className="text-blue">Sanket Parab</h5>
                      <h5 className="mt30 font-weight-bold text-dark mb20">
                        For Extraordinary Compleon in Blockchain Course Blue Belt. 
                      </h5>
                      <h5 className="mt30 font-weight-bold text-dark mb20">
                        The above cerficate informaon is signed by following
                        1 signer which is cryptographically verified by the
                        cerficate smart contract.
                       </h5>
                       <div className="card card-round mt40 bluelight-bg text-left">
                                  <Row>
                                    <Col xs={6} md={3} >
                                        <div className="whitebox2">
                                        <img className="img-fluid" src="./images/blocklogy.png" alt="white-logo" />
                                        </div>
                                    </Col>
                                    <Col xs={12} md={9}>
                                          <Table striped bordered hover size="sm">
                                          
                                                  <tbody>
                                                    <tr>
                                                      <th>Signer 1:</th>
                                                      <td>Blocklogy Edutech Private Limited (0xf846...783D</td>
                                                    </tr>
                                                    <tr>
                                                      <th>Signature:</th>
                                                      <td>0xa94e7876...b69cc3711b</td>
                                                    </tr>
                                                    
                                                  </tbody>
                                        </Table>
                                    </Col>
                                  </Row>
                         </div>
                         <h4 className="mt30 font-weight-bold text-dark mb20">
                            Cerficate Hash:
                        </h4>
                        <h6 className="mt30 font-weight-bold text-dark mb20">
                            0x34c4204b0f808103f69ee547ab9567e2d06b324e2e5532cd7659a8575d075c9d
                        </h6>
                        <div className="col-md-12 text-center">
                          <div className="qr">
                              <img className="img-fluid" src="./images/qr.png" alt="white-logo" />
                          </div>
                        </div>

                        <h6 className="mt30 font-weight-bold text-dark mb20">
                           Created at transacon0x8ec5...d924
                        </h6>
                      
                        <div className="mt20 mb20">
                          <a href=""  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30">
                          View on EtherScan
                            </a>
                      </div>
                     </div>
                  </div>
               </div>

            </div>
          </div>
        </div>

      











   </div>
    );
  }
}
