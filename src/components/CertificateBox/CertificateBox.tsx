import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

interface Certificate {
  name?: string;
  subject?: string;
  score?: string;
  category?: string;
  date?: string;
  other?: string;
  Hash?: string;
  address?: string;
}

interface LoadData {
  name?: string;
  subject?: string;
  score?: string;
  category?: string;
  date?: string;
  other?: string;
}
interface Auth {
  address?: string;
  name?: string;
  website?: string;
  image?: string;
  status?: number;
}

export function CertificateBox(props: Certificate) {
  const [exist, setExist] = useState<boolean>(true);
  const [spin, setSpin] = useState<boolean>(true);
  const [data, setData] = useState<LoadData>({
    name: '',
    subject: '',
    score: '',
    category: '',
    date: '',
    other: '',
  });
  const [auth, setAuth] = useState<Auth>({});
  const color = ['danger', 'primary', 'success'];

  const loadAuth = async () => {
    if (props.address) {
      const authority = await window.certificateInstance.authorities(props.address);
      console.log(authority);
      setAuth({
        address: props.address,
        name: authority[0],
        website: authority[1],
        image: authority[2],
        status: authority[3],
      });
    }
  };
  const loadipfs = async () => {
    if (props.Hash) {
      const Data = await axios.get(`https://ipfs.eraswap.cloud/ipfs/${props.Hash}`);
      console.log(Data.data);
      setData(Data.data);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await loadipfs();
        await loadAuth();
      } catch {
        setExist(false);
      }
      setSpin(false);
    })();
  }, []);
  return (
    <div>
      <div className="card card-round ">
        <div className="row pinside60" style={{ border: '3px solid #004F98', margin: '1px' }}>
          <div className="col-sm-12 text-center">
            <img width="80px" src="./images/Badge.jpg" alt="white-logo" />
            <br />
            <h2 className="text-blue text-weiight-bold">
              Cerficate of {props.category ? props.category : data?.category}
            </h2>
            <h6 className="text-blue">is awarded to</h6>
            <h5 className="text-blue">{props.name ? props.name : data?.name}</h5>
            <h5 className="mt30 font-weight-bold text-dark mb20">
              For Extraordinary performance in {props.subject ? props.subject : data?.subject} on{' '}
              {props.date ? props.date : data.date}
            </h5>

            <div dangerouslySetInnerHTML={{ __html: props.other ? props.other : data?.other }} />
            {props.Hash ? (
              <>
                <h5 className="mt30 font-weight-bold text-dark mb20">
                  The above cerficate informaon is signed by following 1 signer which is
                  cryptographically verified by the cerficate smart contract.
                </h5>
                {!auth.status ? (
                  <div className=" mt40 alert-danger text-left">
                    <Table striped bordered hover size="sm">
                      <tbody>
                        <tr>
                          <th>Signature:</th>
                          <td>{auth?.address}</td>
                        </tr>
                      </tbody>
                    </Table>
                    <div className="text-danger small text-right">
                      *this signer is not listed on CertiDapp
                    </div>
                  </div>
                ) : (
                  <div className={` alert alert-${color[auth.status]} mt40  text-left`}>
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
                              <th className={`text-${color[auth.status]}`}>Signer :</th>
                              <td>{auth?.name}</td>
                            </tr>
                            <tr>
                              <th className={`text-${color[auth.status]}`}>Signature:</th>
                              <td className="small">{auth?.address}</td>
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
                <h4 className="mt30 font-weight-bold text-dark mb20">Cerficate Hash:</h4>
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
                  <a
                    href="/"
                    className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30"
                  >
                    View on EtherScan
                  </a>
                </div>
              </>
            ) : (
              <Alert variant="danger"> View Mode only (No Signer ) </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
