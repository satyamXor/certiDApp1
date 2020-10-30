import * as IpfsHttpClient from 'ipfs-http-client';


const ipfs = IpfsHttpClient({ host: '13.127.174.128', port: '5005', protocol: 'http' });
// const ipfs = IpfsHttpClient({ host: 'ipfs.eraswap.cloud', port: '5005', protocol: 'https' });
// const ipfs = IpfsHttpClient({ host: 'ipfs.eraswap.cloud', port: '5005', protocol: 'http' });
// const ipfs = IpfsHttpClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

export default ipfs;
