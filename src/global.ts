import { ethers } from 'ethers';
// import { NrtManager } from './ethereum/typechain/NrtManager';
// import { TimeAllyManager } from './ethereum/typechain/TimeAllyManager';
// import { ValidatorManager } from './ethereum/typechain/ValidatorManager';
// import { PrepaidEs } from './ethereum/typechain/PrepaidEs';
// import { BuildSurvey } from "./ethereum/typechain/BuildSurvey";
// import { Survey } from './ethereum/typechain/Survey'
// import { BuildSurvey } from 'eraswap-sdk/dist/typechain/ESN/BuildSurvey';
import { CustomProvider } from 'eraswap-sdk/dist/custom-provider';
import { Certificate } from './ethereum/Certificate';
// import { CustomWallet } from './ethereum/custom-wallet';
// import { JsonRpcSigner } from 'ethers'

// mark the typings of your global variables
declare global {
  interface Window {
    provider: ethers.providers.JsonRpcProvider;
    providerESN: CustomProvider;
    wallet: any;
    // wallet: CustomWallet | ethers.providers.JsonRpcSigner | undefined; // marking this as undefined helps to prevent many runtime bugs when wallet is not loaded
    // nrtManagerInstance: NrtManager;
    // timeallyManagerInstance: TimeAllyManager;
    // validatorManagerInstance: ValidatorManager;
    // prepaidEsInstance: PrepaidEs;
    ethereum: ethers.providers.ExternalProvider;
    certificateInstance: Certificate;
  }
}
