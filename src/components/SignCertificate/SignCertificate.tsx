import React, { Component } from 'react';
import './SignCertificate.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Alert, } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { Form } from 'react-bootstrap';

type State = {
  bunchModal: boolean;
};

export class SignCertificate extends Component<State> {
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
                      Welcome ! Using this portal you can sign certificates on your half and
                       send the generated certificate hex strings to your students/clients so they
                        can register those certificates.
                      </p>
                      
                     </div>
                  </div>
               </div>

          

                <div className="">
                     <a href=""  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30 ml10">
                     New  Certificate
                       </a>
                       <a href=""  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30 ml10">
                       Sign Encoded  Certificate
                       </a>
                       <a href=""  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30 ml10">
                       CSV   Mode
                       </a>
                </div>

            </div>
          </div>
        </div>
       </div>
    );
  }
}
