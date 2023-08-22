"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var markdown1_json_1 = __importDefault(require("./markdown1.json"));
var markdown2_json_1 = __importDefault(require("./markdown2.json"));
var markdown3_json_1 = __importDefault(require("./markdown3.json"));
var mcq_json_1 = __importDefault(require("./mcq.json"));
// Add Id to block responses for easy editing
var responseWithIds = [
    markdown1_json_1.default,
    markdown3_json_1.default,
    mcq_json_1.default,
    mcq_json_1.default,
    mcq_json_1.default,
    markdown2_json_1.default,
    markdown3_json_1.default,
].map(function (block, i) { return (__assign(__assign({}, block), { BlockId: "".concat(i) })); });
exports.default = responseWithIds;
