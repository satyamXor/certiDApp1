import React from 'react'
import {  Table, Row, Col,Alert } from 'react-bootstrap';

interface Certificate {
  name ?: string;
  subject ?: string; 
  score ?: string; 
  category ?: string;
  date ?: string;
  other ?: string;
  Hash ?: string;
}

export function CertificateBox(props : Certificate) {
  const stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };
  return (
  <div>
                     
  <div className="card card-round ">
    <div className="row pinside60" style={{border:'3px solid #004F98',margin:'1px'}}>
      <div className="col-sm-12 text-center">
        <img className="img-fluid" width="80px" src="./images/Badge.jpg" alt="white-logo" /><br/>
        <h2 className="text-blue text-weiight-bold">Cerficate of {props.category}</h2>
        <h6 className="text-blue">is awarded to</h6>
        <h5 className="text-blue">{props.name}</h5>
        <h5 className="mt30 font-weight-bold text-dark mb20">
          For Extraordinary performance in {props.subject}  on {props.date}
        </h5>
        
        <div dangerouslySetInnerHTML={{ __html: props.other }} />
        {(props.Hash)?<><h5 className="mt30 font-weight-bold text-dark mb20">
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
            <a href="/"  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30">
            View on EtherScan
              </a>
        </div></>:<Alert variant="danger" > View Mode only (No Signer ) </Alert>}
        </div>
    </div>
  </div>
</div>
  )
}
