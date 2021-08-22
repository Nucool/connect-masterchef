const fs = require('fs')
const MasterChef = artifacts.require('MasterChef.sol')
const MASTERCHEF_ADDRESS = '0xde19C03774c079A1260b5721f2ba5f86cF0C9A33'

module.exports = async done => {
    try {
  
      console.log('start')
      const [admin, _] = await web3.eth.getAccounts()
      const mc = await MasterChef.at(MASTERCHEF_ADDRESS)
      const poolInfo = await mc.poolInfo(0)
      let jsonData = JSON.stringify(poolInfo)

      console.log('poolInfo', jsonData)
      fs.writeFileSync('data.json', jsonData, 'utf8');
      console.log('writeFile done')
    } catch(e) {
        console.log(e)
    }
    done()
}