import React, { Component } from 'react';
import './ViewCertificate1.css';
import { Table, Row, Col } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';

type State = {
  bunchModal: boolean;
  Data: LoadData;
  auth: Auth;
};
interface MyViewProperties extends RouteComponentProps {
  hash: string;
  params: any;
}

interface LoadData {
  name?: string;
  subject?: string;
  score?: string;
  category?: string;
  date?: string;
  other?: string;
  address?: string;
}
interface Auth {
  address?: string;
  name?: string;
  website?: string;
  image?: string;
  status?: number;
}

export class ViewCertificate1 extends Component<MyViewProperties, State> {
  state: State = {
    bunchModal: false,
    Data: {},
    auth: {},
  };
  color: string[] = ['danger', 'primary', 'success'];
  hash = '';

  handleClose = () => {
    this.setState({
      bunchModal: false,
    });
  };
  async componentDidMount() {
    const { params }: any = this.props.match;

    console.log(params.hash);
    console.log(this.props);
    try {
      this.hash = params.hash;
      const txn = await window.certificateInstance.certificates(params.hash);
      console.log(txn);
      const Data = await axios.get(`https://ipfs.eraswap.cloud/ipfs/${txn[0]}`);
      console.log(Data.data);
      this.setState({ Data: { ...Data.data } });
      const authority = await window.certificateInstance.authorities(txn[1]);
      console.log(authority);
      this.setState({
        auth: {
          address: txn[1],
          name: authority[0],
          website: authority[1],
          image: authority[2],
          status: authority[3],
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

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
                      This section is used to view an already registered certificate. Using the
                      below box, you can view an already registered certificate with CertiÐApp Smart
                      Contract on Ethereum Blockchain. You need a certificate hash to proceed. If
                      you don't have a certificate hash, please ask the certificate holder (whose
                      certificate you want to see) to give you hash of their certificate.
                    </p>
                  </div>
                </div>
              </div>{' '}
              <br />
              <br />
              <br />
              <br />
              <div className="card card-round ">
                <div
                  className="row pinside60"
                  style={{ border: '3px solid #004F98', margin: '1px' }}
                >
                  <div className="col-sm-12 text-center">
                    <img
                      width="80px"
                      src={process.env.PUBLIC_URL + '/images/Badge.jpg'}
                      alt="white-logo"
                    />
                    <br />
                    <h2 className="text-blue text-weiight-bold">
                      Cerficate of {this.state.Data?.category}
                    </h2>
                    <h6 className="text-blue">is awarded to</h6>
                    <h5 className="text-blue">{this.state.Data?.name}</h5>
                    <h5 className=" font-weight-bold text-dark ">For {this.state.Data?.subject}</h5>
                    <h5 className="font-weight-bold text-dark">on {this.state.Data?.date} </h5>
                    <div dangerouslySetInnerHTML={{ __html: this.state.Data?.other }} />
                    {!this.state.auth.status ? (
                      <div className=" mt40 alert-danger text-left">
                        <Table striped bordered hover size="sm">
                          <tbody>
                            <tr>
                              <th>Signature:</th>
                              <td>{this.state.auth?.address}</td>
                            </tr>
                          </tbody>
                        </Table>
                        <div className="text-danger small text-right">
                          *this signer is not listed on CertiDapp
                        </div>
                      </div>
                    ) : (
                      <div
                        className={` alert alert-${
                          this.color[this.state.auth.status]
                        } mt40  text-left`}
                      >
                        <Row>
                          <Col xs={6} md={3}>
                            <div className="whitebox2">
                              <img
                                className="img-fluid"
                                src="https://ipfs.eraswap.cloud/ipfs/QmdQALCX4i6bqao6onaK1WJ3RfJDgKUd1RdAqZc7HfgHZV"
                                alt="white-logo"
                              />
                            </div>
                          </Col>
                          <Col xs={12} md={9}>
                            <Table striped bordered hover size="sm">
                              <tbody>
                                <tr>
                                  <th className={`text-${this.color[this.state.auth.status]}`}>
                                    Signer :
                                  </th>
                                  <td>{this.state.auth?.name}</td>
                                </tr>
                                <tr>
                                  <th className={`text-${this.color[this.state.auth.status]}`}>
                                    Signature:
                                  </th>
                                  <td className="small">{this.state.auth?.address}</td>
                                </tr>
                              </tbody>
                            </Table>
                            <hr />
                            <div className="text-right m-0 p-0 small">
                              *This signer has listed with us & have valid KYC{' '}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    )}
                    <h4 className="mt30 font-weight-bold text-dark mb20"> Cerficate Hash:</h4>
                    <h6 className="mt30 font-weight-bold text-dark mb20">{this.hash}</h6>
                    <div className="col-md-12 text-center">
                      <div className="qr">
                        <img
                          className="img-fluid"
                          src="https://raw.githubusercontent.com/zpao/qrcode.react/HEAD/qrcode.png"
                          alt="white-logo"
                        />
                      </div>
                    </div>
                    <h6 className="mt30 font-weight-bold text-dark mb20">
                      Created at transacon0x8ec5...d924
                    </h6>
                    <div className="mt20 mb20">
                      <a
                        href="/"
                        className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30"
                      >
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
