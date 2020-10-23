import React, { Component } from 'react';
import { Buffer } from 'buffer';
import Swal from 'sweetalert2';
import './ListAuthorities.css';
import { Table, Row, Col, Form } from 'react-bootstrap';
import ipfs from '../ipfs';
import ethers from 'ethers';

type State = {
  bunchModal: boolean;
  name: string;
  website: string;
  logo: string;
  authoritiesAll: any[];
};

export class ListAuthorities extends Component<State> {
  state: State = {
    bunchModal: true,
    name: '',
    website: '',
    logo: '',
    authoritiesAll: [],
  };

  handleClose = () => {
    this.setState({
      bunchModal: false,
    });
  };
  getSurvey = async () => {
    const filter = window.certificateInstance.filters.Authorities(null);
    const logs = await window.certificateInstance.queryFilter(filter);
    const parseLogs = logs.map((log) => window.certificateInstance.interface.parseLog(log));
    const authorities = parseLogs.map((ele) => ele.args[0]);
    const authoritiesAll = await Promise.all(
      authorities.map(async (ele) => {
        const x = await window.certificateInstance.authorities(ele);
        const p = [x[0], x[1], x[2], x[3], ele];
        return p;
      })
    );
    console.log('All :', authoritiesAll);
    //   Promise.all(authoritiesAll).then((results)=> {
    //   console.log(results)
    // })
    this.setState({ ...this.state, authoritiesAll: authoritiesAll });
    return authoritiesAll;
  };
  captureFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('hello world');

    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = async () => {
      console.log(reader.result);

      const buf = Buffer.from(reader.result);
      let asyncGenerator = await ipfs.add(buf);
      console.log(asyncGenerator);
      console.log('buffer', buf);
      if (asyncGenerator) this.setState({ logo: asyncGenerator.path });
      this.setState({ bunchModal: false });
    };
  };

  onSubmit = async (event) => {
    event.preventDefault();
    if (window.wallet) {
      try {
        const sur = await window.certificateInstance
          .connect(window.wallet)
          .addAuthority(this.state.name, this.state.website, this.state.logo, {
            value: ethers.utils.parseEther('5'),
          });
        const receipt = await sur.wait();

        console.log('TXN Hash :', sur);
        Swal.fire({
          icon: 'success',
          title: 'Oops...',
          text: 'You are added',
        });
      } catch (e) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        // setisSubmit(false);
      }
    } else
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Connect to wallet!',
      });
  };

  componentDidMount = async () => {
    if (window.wallet) {
      if (window.wallet.address) this.setState({ ...this.state, address: window.wallet.address });
      else this.setState({ ...this.state, address: await window.wallet.getAddress() });
    }
    await this.getSurvey();
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
                      This page contains list of all verified certifying authority wallets who have
                      completed their KYC.
                    </h3>
                  </div>
                </div>
              </div>
              {this.state.authoritiesAll.map((ele) => {
                return (
                  <div className="card card-round mt40 bluelight-bg">
                    <Row>
                      <Col xs={6} md={4}>
                        <div className="whitebox" style={{ overflow: 'hidden' }}>
                          <img
                            className="img-fluid"
                            width="100%"
                            height="100%"
                            src={`http://13.127.174.128:8080/ipfs/${ele[2]}`}
                            alt="white-logo"
                          />
                        </div>
                      </Col>
                      <Col xs={12} md={8}>
                        <Table striped bordered hover size="sm">
                          <tbody>
                            <tr>
                              <th>Name:</th>
                              <td>{ele[0]}</td>
                            </tr>
                            <tr>
                              <th>Website:</th>
                              <td>{ele[1]}</td>
                            </tr>

                            <tr>
                              <th>Image:</th>
                              <td>{ele[2]}</td>
                            </tr>

                            <tr>
                              <th>Signing Address:</th>
                              <td>{ele[4]}</td>
                            </tr>
                            <tr>
                              <th>Status:</th>
                              <td>{ele[3]}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </div>
                );
              })}{' '}
              <div className="card card-round mt40 bluelight-bg">
                <div className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30">
                  Become Certified Authority
                </div>
                <div className="row">
                  <div className="col-sm-12 text-cente">
                    <Form className="text-left" onSubmit={this.onSubmit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control
                          required
                          name="name"
                          value={this.state.name}
                          onChange={(e) => this.setState({ name: e.target.value })}
                          placeholder="Enter name"
                        />
                        <Form.Text className="text-muted">
                          This name will be shown in{' '}
                          <i className="fa fa-certificate" aria-hidden="true"></i>
                        </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter website name</Form.Label>
                        <Form.Control
                          required
                          type="name"
                          placeholder="www.eraswap.info"
                          name="website"
                          value={this.state.website}
                          onChange={(e) => this.setState({ website: e.target.value })}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your this with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group>
                        <Form.File
                          className="position-relative"
                          required
                          name="file"
                          accept="image/*"
                          onChange={this.captureFile}
                          label="Add your logo here"
                        />
                      </Form.Group>
                      <button
                        className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30"
                        disabled={this.state.bunchModal}
                        type="submit"
                      >
                        Submit
                      </button>
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
