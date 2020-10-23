import React, { Component, useState } from 'react';
import './SignCertificate.css';
import { Button, Form, Col } from 'react-bootstrap';
import { CertificateBox } from '../CertificateBox';
import Swal from 'sweetalert2';
import ipfs from '../ipfs';
import copy from 'copy-to-clipboard';

interface Certificate {
  name: string;
  subject: string;
  score: string;
  category: string;
  date: string;
  other: string;
}

type State = {
  bunchModal: boolean;
  certificate: Certificate;
  create: boolean;
};
const initialCerti = { name: '', subject: '', score: '', category: '', date: '', other: '' };
async function resolveAddress() {
  let address = 'connect to wallet';
  if (window.wallet) {
    if (window.wallet.address) address = window.wallet.address;
    else address = await window.wallet.getAddress();
  }
  return address;
}

function Create() {
  const [data, setData] = useState<Certificate>(initialCerti);
  const [show, setShow] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const SignCertificate = async () => {
    try {
      console.log('Hello');

      let asyncGenerator = await ipfs.add(JSON.stringify(data));
      console.log(asyncGenerator);
      var signature = await window.wallet.signMessage(asyncGenerator.path);
      console.log(signature);
      const Signaddress = await resolveAddress();
      const Hash = asyncGenerator.path;
      const TXNHASH = [Hash, signature, Signaddress].toString();
      console.log(TXNHASH);

      Swal.fire({
        title: 'Copy your Signed Certificate hash',
        icon: 'success',
        html: `${TXNHASH} <i className="fa fa-clone" onClick={copy(TXNHASH)} aria-hidden="true">[copy]</i>`,
        confirmButtonText: 'copy',
      }).then((result) => {
        copy(TXNHASH);
      });
    } catch (e) {
      Swal.fire('Oops...', 'Something went wrong', 'error');
    }
  };
  return (
    <div>
      <Form
        style={{ textAlign: 'left' }}
        onSubmit={(e) => {
          e.preventDefault();
          return setShow(true);
        }}
      >
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Full Name*</Form.Label>
          <Form.Control
            required
            placeholder="Enter Full Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Subject*</Form.Label>
          <Form.Control
            required
            placeholder="Enter Subject"
            name="subject"
            value={data.subject}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Category*</Form.Label>
            <Form.Control
              required
              placeholder="e.g. : Participation / Merit / Appreciation "
              name="category"
              value={data.category}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Score</Form.Label>
            <Form.Control
              placeholder="e.g : 89.50%"
              name="score"
              value={data.score}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="date" value={data.date} onChange={handleChange} />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Want to add more content ? </Form.Label>
          <Form.Text className="text-muted">
            You can design your own certificates using simple HTML.
          </Form.Text>
          <Form.Control
            as="textarea"
            rows={3}
            name="other"
            value={data.other}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {' '}
          Preview{' '}
        </Button>
      </Form>
      {show ? <CertificateBox {...data} /> : null}

      <button
        onClick={SignCertificate}
        className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30"
      >
        Sign Certificate
      </button>
    </div>
  );
}

export class SignCertificate extends Component<State> {
  state: State = {
    bunchModal: false,
    certificate: initialCerti,
    create: false,
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
                  <div className="col-sm-12 text-center">
                    <p className="description wow animated fadeIn delay-2s p_edit animated">
                      Welcome ! Using this portal you can sign certificates on your half and send
                      the generated certificate hex strings to your students/clients so they can
                      register those certificates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <button
                  onClick={() => this.setState((prev) => ({ ...prev, create: true }))}
                  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30 ml10"
                >
                  New Certificate
                </button>
                <a
                  href="/"
                  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30 ml10"
                >
                  Sign Encoded Certificate
                </a>
                <a
                  href="/"
                  className="btn btn-primary btn-xl js-scroll-trigger combtn combtn1 mt20 mb30 ml10"
                >
                  CSV Mode
                </a>
              </div>
              {this.state.create ? <Create /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
