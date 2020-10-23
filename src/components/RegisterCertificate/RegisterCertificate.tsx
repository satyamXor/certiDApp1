import React, { Component } from 'react';
import './RegisterCertificate.css';
import { Link } from 'react-router-dom';
import { Alert, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import ethers from 'ethers';
import { CertificateBox } from '../CertificateBox';
// import { assert } from 'console';

type State = {
  bunchModal: boolean;
  signHash: string;
  done: boolean;
  hash: string;
  byte: string;
  certi: boolean;
  Args: string[];
};

const TxnDetails = ({ hash, byte }) => {
  return (
    <>
      <br />
      <i className="fa fa-check-circle" style={{ fontSize: '8em', color: '#54BE3D' }}></i>
      <p>
        {' '}
        Transaction Sussessful <br /> Your Certificate has been Registered{' '}
      </p>
      <br /> <br /> <br />
      <table className="table">
        <tr>
          <td> Transaction Hash : </td>
          <td>
            <a href={'https://eraswap.info/txn/' + hash}>{hash} </a>{' '}
          </td>
        </tr>
        <tr>
          <td>TimeStamp</td>
          <td>{Date.now()}</td>
        </tr>
        <tr>
          <td>Your Certificate</td>
          <td>
            <Link to={'/Survey/Surveys/' + byte}>{byte}</Link>
          </td>
        </tr>
        <hr />
      </table>
    </>
  );
};

export class RegisterCertificate extends Component<State> {
  state: State = {
    bunchModal: false,
    signHash: '',
    done: false,
    hash: '',
    byte: '',
    certi: false,
    Args: [],
  };

  handleClose = () => {
    this.setState({
      bunchModal: false,
    });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const Args = this.state.signHash.split(',');
    console.log(Args);
    this.setState({ Args: Args });
    const color: string[] = ['danger', 'primary', 'success'];

    if (window.wallet) {
      try {
        //   assert(Args.length === 3)
        const sur = await window.certificateInstance
          .connect(window.wallet)
          .registerCertificates(Args[0], Args[1], Args[2]);
        const receipt = await sur.wait();
        console.log('TXN Hash :', receipt);
        Swal.fire({
          icon: 'success',
          title: 'Great 👍',
          text: 'You have Register you Certificate ',
        });
        this.setState({
          done: true,
          hash: receipt.transactionHash,
          byte: receipt.events[0].args[0],
        });
      } catch (e) {
        const add = await window.wallet.getAddress();
        const x = new ethers.VoidSigner(add, window.providerESN);
        try {
          const A = await window.certificateInstance
            .connect(x)
            .estimateGas.registerCertificates(Args[0], Args[1], Args[2]);
          console.log(A);
        } catch (e) {
          console.log('Error is : ', e);

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${e}`,
          });
          console.log(e);
        }
      }
    } else
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Connect to wallet!',
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
                    <p>
                      If you don't have a certificate hex string and you want a certificate, then
                      you can ask any organisation around you that gives traditional printed
                      certificates to switch to blockchain based secure certificates using
                      CertiÐApp.
                    </p>
                  </div>
                </div>
              </div>
              <h4 className="mt80 font-weight-bold mb20">
                Paste your signed certificate in the below box:
              </h4>
              <Form>
                <textarea
                  className="card-round col-md-12"
                  name="signHash"
                  value={this.state.signHash}
                  onChange={(e) => this.setState({ signHash: e.target.value })}
                ></textarea>
                <Alert variant="danger" className="mt40">
                  <p>
                    If you want to register your certificate, you will need Metamask installed. If
                    you are here only to view certificates, installing Metamask is not necessary
                  </p>
                </Alert>
              </Form>
              <button
                onClick={() => {
                  this.setState({ certi: true });
                  const Args = this.state.signHash.split(',');
                  this.setState({ Args: Args });
                }}
                className="btn btn-primary "
              >
                preview
              </button>
              <button
                onClick={this.handleRegister}
                className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30"
              >
                Register Certificate
              </button>
            </div>
            {this.state.certi ? (
              <CertificateBox Hash={this.state.Args[0]} address={this.state.Args[2]} />
            ) : null}
            {this.state.done ? <TxnDetails hash={this.state.hash} byte={this.state.byte} /> : null}
          </div>
        </div>
      </div>
    );
  }
}
