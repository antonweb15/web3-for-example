import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xA7b8A1c920314620a06C7720a2085d81229DfA22'
);

export default instance;
