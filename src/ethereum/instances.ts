import { ethers } from 'ethers';
// import { CustomWallet } from './custom-wallet';
import CertiDapp from './CertiDapp.json';

import { CertificateFactory } from './CertificateFactory';

window.provider =  new ethers.providers.AlchemyProvider("rinkeby", "ne5VnYiKMx1T2gQYHscYFfu1oKfeHDn0");

// window.certificateInstance = CertificateFactory.connect(
//   // providerESN.resolveAddress(es.addresses[process.env.NODE_ENV].ESN.buildSurvey),
//   '0xD06Af22f06B1786013149EEe32Df19b98724821A',
//   window.provider
// );

window.certificateInstance = new ethers.Contract("0xD06Af22f06B1786013149EEe32Df19b98724821A",CertiDapp.abi,window.provider);


