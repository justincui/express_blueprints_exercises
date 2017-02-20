'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _test = require('./test');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.get('/', function (req, res, next) {
    res.send('hello, world!');
});
app.listen(3000, "0.0.0.0");
console.log("Express started at port 3000");
console.log("test=", _test2.default);
//# sourceMappingURL=index.js.map