'use strict';

module.exports = function (app) {

    app.get('/health', function (req, res) {
        res.send(200, 'ok');
    });

};
