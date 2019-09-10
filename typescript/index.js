"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XIClass_1 = require("./XIClass");
// 先定义, 再输入数据
let ts;
ts = {
    name: "typescript",
    file: "./readme.md",
    time: new Date("2019-09-07")
};
console.log('ts', ts);
// 直接定义数据
let wsl = {
    name: "wsl",
    file: "../wsl/readme.md",
    time: new Date("2019-09-07")
};
console.log('wsl', wsl);
// 定义表示
let unknow = {
    name: "unknow",
    file: "./unknow",
    time: new Date()
};
console.log('unknow', unknow);
console.log("---- xiclass ----");
let xiclass = new XIClass_1.XiClass(ts.name, ts.file, ts.time);
console.log("xiclass.getFile():", xiclass.getFile());
console.log("xiclass.getName():", xiclass.getName());
console.log("xiclass.getTime():", xiclass.getTime());
console.log("xiclass.getVersion():", xiclass.getVersion());
console.log("xiclass.thistime:", xiclass.thistime);
xiclass.thistime = new Date();
console.log("after set xiclass.thistime:", xiclass.thistime);
console.log("xiclass.toJSON():", xiclass.toJSON());
console.log("JSON.stringify(xiclass):", JSON.stringify(xiclass));
console.log("xiclass.toString():", xiclass.toString());
