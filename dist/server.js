"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var routes_1 = require("./routes");
app.get('/', routes_1.createCourse);
app.listen(3000, function () {
    console.log('server runnig on port 3000');
});
