"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sampleResponse_1 = __importDefault(require("../sampleData/sampleResponse"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8080;
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello!');
});
app.get('/blocks', function (req, res) {
    return res.json(sampleResponse_1.default);
});
app.put('/blocks/:blockId', function (req, res) {
    var blockIdToUpdate = req.params.blockId;
    var newBlock = req.body;
    /**
     * Note: this will not really save the changes on the server as we are not editing the
     * "db" / json files directly. This is just a mimick for the purpose of this demo.
     * IRL we would write changes to our DB.
     */
    var updatedResponse = sampleResponse_1.default.map(function (b) {
        return b.BlockId === blockIdToUpdate ? newBlock : b;
    });
    return res.json(updatedResponse);
});
app.listen(PORT, function () {
    console.log("[Server]: I am running on port:".concat(PORT));
});
