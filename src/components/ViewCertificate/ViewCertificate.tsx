import React, { Component } from 'react';
import './ViewCertificate.css';
import { Link } from 'react-router-dom';
import copy from 'copy-to-clipboard';

type State = {
  bunchModal: boolean;
  hash?: string;
  List?: string[];
};

export class ViewCertificate extends Component<State> {
  state: State = {
    bunchModal: false,
    hash: '',
    List: [],
  };

  handleClose = () => {
    this.setState({
      bunchModal: false,
    });
  };
  loadEvents = async () => {
    const filter = window.certificateInstance.filters.RegisterCertificates(null, null, null);
    const logs = await window.certificateInstance.queryFilter(filter);
    const parsedLogs = logs.map((log) => window.certificateInstance.interface.parseLog(log));
    const updatevalues = parsedLogs.map((parsedLogs) => parsedLogs.args[0]);
    console.log('All Certificates: ', updatevalues);
    this.setState({ List: updatevalues });
  };

  async componentDidMount() {
    await this.loadEvents();
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
              </div>
              <h4 className="mt80 font-weight-bold mb20">
                Paste the certificate hash in the box below:
              </h4>
              <textarea
                onChange={(e) => this.setState({ hash: e.target.value })}
                className="card-round col-md-12"
                placeholder="Enter Certificate Hash"
              ></textarea>
              <div className="">
                <Link
                  to={`/ViewCertificate/${this.state.hash}`}
                  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30"
                >
                  Verify Certificate
                </Link>
              </div>

              <div className="card card-round mt40 bluelight-bg">
                <div className="row">
                  <div className="col-sm-12 text-cente">
                    <h3 className="">Or you can also check out some recent certificate Hashes</h3>
                    <div className="">
                      {' '}
                      <Link
                        to={`/ViewCertificate/${this.state?.List[0]}`}
                        className="btn btn-light btn-sm"
                      >
                        {this.state?.List[0]}{' '}
                        <i
                          className="fa fa-file text-dark"
                          onClick={() => copy(this.state?.List[0])}
                          aria-hidden="true"
                        ></i>
                      </Link>{' '}
                    </div>
                    <div className="">
                      {' '}
                      <Link
                        to={`/ViewCertificate/${this.state?.List[1]}`}
                        className="btn btn-light btn-sm"
                      >
                        {this.state?.List[1]}{' '}
                        <i
                          className="fa fa-file text-dark"
                          onClick={() => copy(this.state?.List[0])}
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </div>
                    <div className="">
                      <Link
                        to={`/ViewCertificate/${this.state?.List[2]}`}
                        className="btn btn-light btn-sm"
                      >
                        {' '}
                        {this.state?.List[2]}{' '}
                        <i
                          className="fa fa-file text-dark"
                          onClick={() => copy(this.state?.List[0])}
                          aria-hidden="true"
                        ></i>
                      </Link>
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
