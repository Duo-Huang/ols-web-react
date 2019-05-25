const proxy = {
    'GET /api/user': { id: 1, username: 'kenny', sex: 6 },
    'POST /api/login': (req, res) => {
        const { password, username } = req.body;
        if (password === 'admin888' && username === 'admin') {
            return res.send({
                status: 'ok',
                code: 200,
                token: "thisistoken",
                data: { id: 1, username: 'kenny', sex: 6 }
            });
        } else {
            return res.send({ status: 'error', code: 403 });
        }
    },
    'GET /trainingcamps/%7Bid%7D': {
        "id": 1,
        "title": "xx训练营",
        "start_time": "2018-01-02 10:12:55.222",
        "description": "This is a training camp",
        "created_time": "2018-01-01 09:12:33.443"
    }
}
module.exports = proxy;