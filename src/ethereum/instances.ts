import { ethers } from 'ethers';
import { CustomWallet } from './custom-wallet';
import { es } from 'eraswap-sdk'; 
import {CertificateFactory} from './CertificateFactory'

window.providerESN = new es.CustomProvider('testnet');

window.certificateInstance = CertificateFactory.connect(
  // providerESN.resolveAddress(es.addresses[process.env.NODE_ENV].ESN.buildSurvey),
  '0x9A994c8419F9cf5877C6620f35CEd510211cE3F7',
  window.providerESN
);
window.surveyInstance = es.typechain.ESN.BuildSurveyFactory.connect(
  // providerESN.resolveAddress(es.addresses[process.env.NODE_ENV].ESN.buildSurvey),
  '0xCf535dB3c1EDbFbBdadbDe725119906BE20fb362',
  window.providerESN
); 