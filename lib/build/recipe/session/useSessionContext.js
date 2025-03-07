"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var sessionContext_1 = __importDefault(require("./sessionContext"));
var useSessionContext = function () {
    return react_1.default.useContext(sessionContext_1.default);
};
exports.default = useSessionContext;
