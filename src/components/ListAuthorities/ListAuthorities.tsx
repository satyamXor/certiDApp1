import React, { Component } from 'react';
import './ListAuthorities.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Alert, Table, Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { Form } from 'react-bootstrap';

type State = {
  bunchModal: boolean;
};

export class ListAuthorities extends Component<State> {
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
              <h3>LIST AUTHORITIES</h3>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-9 mx-auto mt40 mb40">
              <div className="card card-round ">
                  <div className="row">
                    <div className="col-sm-12 text-cente">
                      <h3 className="">
                      This page contains list of all verified certifying authority wallets who have completed their KYC.
                      </h3>
                      
                     </div>
                  </div>
               </div>

              
               
               <div className="card card-round mt40 bluelight-bg">

                    <Row>
                      
                      <Col xs={6} md={4} >
                          <div className="whitebox">
                          <img className="img-fluid" src="./images/blocklogy.png" alt="white-logo" />
                          </div>
                      </Col>
                      <Col xs={12} md={8}>
                      <Table striped bordered hover size="sm">
                                    
                                    <tbody>
                                      <tr>
                                        <th>Name:</th>
                                        <td>Blocklogy Edutech Private Limited</td>
                                      </tr>
                                      <tr>
                                        <th>Website:</th>
                                        <td>blocklogy.org</td>
                                      </tr>
                                      
                                      <tr>
                                        <th>Image:</th>
                                        <td>QmT54w4uHQi5qQ9JLzpaCa1L7SSUWvfJ UuXSSSJmjbMQXE</td>
                                      </tr>
                                      
                                      <tr>
                                        <th>Signing Address:</th>
                                        <td>0xf846828cbf4ef19f621e33c1649982736ff8783d</td>
                                      </tr>
                                      <tr>
                                        <th>Status:</th>
                                        <td>Authorised</td>
                                      </tr>
                                      
                                      
                                      
                                      
                                    </tbody>
                                  </Table>
                                
                                  {/* <p><strong>Name:</strong> Blocklogy Edutech Private Limited </p>
                                  <p><strong>Website:</strong> blocklogy.org </p>
                                  <p><strong>Image:</strong> QmT54w4uHQi5qQ9JLzpaCa1L7SSUWvfJ UuXSSSJmjbMQXE </p>
                                  <p><strong>Signing Address::</strong> 0xf846828cbf4ef19f621e33c1649982736ff8783d</p>
                                  <p><strong>Status:</strong> Authorised</p> */}
                      </Col>
                    </Row>
                        
               </div>
               <div className="card card-round mt40 bluelight-bg">

                    <Row>
                      
                      <Col xs={6} md={4} >
                          <div className="whitebox">
                          <img className="img-fluid" src="./images/blocklogy.png" alt="white-logo" />
                          </div>
                      </Col>
                      <Col xs={12} md={8}>
                      <Table striped bordered hover size="sm">
                                    
                                    <tbody>
                                      <tr>
                                        <th>Name:</th>
                                        <td>Blocklogy Edutech Private Limited</td>
                                      </tr>
                                      <tr>
                                        <th>Website:</th>
                                        <td>blocklogy.org</td>
                                      </tr>
                                      
                                      <tr>
                                        <th>Image:</th>
                                        <td>QmT54w4uHQi5qQ9JLzpaCa1L7SSUWvfJ UuXSSSJmjbMQXE</td>
                                      </tr>
                                      
                                      <tr>
                                        <th>Signing Address:</th>
                                        <td>0xf846828cbf4ef19f621e33c1649982736ff8783d</td>
                                      </tr>
                                      <tr>
                                        <th>Status:</th>
                                        <td>Authorised</td>
                                      </tr>
                                      
                                      
                                      
                                      
                                    </tbody>
                                  </Table>
                                
                                  {/* <p><strong>Name:</strong> Blocklogy Edutech Private Limited </p>
                                  <p><strong>Website:</strong> blocklogy.org </p>
                                  <p><strong>Image:</strong> QmT54w4uHQi5qQ9JLzpaCa1L7SSUWvfJ UuXSSSJmjbMQXE </p>
                                  <p><strong>Signing Address::</strong> 0xf846828cbf4ef19f621e33c1649982736ff8783d</p>
                                  <p><strong>Status:</strong> Authorised</p> */}
                      </Col>
                    </Row>
                        
               </div>

                <div className="">
                     <a href=""  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30">
                     Become  Certified Authority 
                       </a>
                </div>

                 
               <div className="card card-round mt40 bluelight-bg">
                  <div className="row">
                    <div className="col-sm-12 text-cente">
                  
                    <Form className="text-left">
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Enter Name:</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Enter Subject:</Form.Label>
                          <Form.Control type="email" placeholder="Enter Subject / Course Name" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Image:</Form.Label>
                          <Form.Control type="email" placeholder="E.g. 74. 89" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Signing Address:</Form.Label>
                          <Form.Control type="email" placeholder="e . g . Parcipaon / Merit
" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>


                        <div className="">
                          <a href=""  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30">
                          Submit
                            </a>
                      </div>
                      </Form>
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
