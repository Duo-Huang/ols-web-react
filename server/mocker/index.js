const trainList = require('./train/trainList.json');
const proxy = {
    'GET /api/user': {id: 1, username: 'kenny', sex: 6 },
    'GET /api/trainList': trainList
}
module.exports = proxy;