const trainList = require('./train/trainList.json');
const proxy = {
    'GET /api/trainList': trainList,
    'GET /api/trainingcamps/%7Bid%7D': {
        "id": 1,
        "title": "xx训练营",
        "start_time": "2018-01-02 10:12:55.222",
        "description": "This is a training camp",
        "created_time": "2018-01-01 09:12:33.443"
    }
}
module.exports = proxy;