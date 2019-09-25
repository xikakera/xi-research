"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logVal(val) {
    switch (val.type) {
        case "green":
            // 可以推断出 val 有 green_value 属性
            // val 没有 yellow_value, 如果写入 val.yellow_value 则报错
            console.log(val.type, val.value, "is green:", val.green_value);
            break;
        case "yellow":
            console.log(val.type, val.value, "is yellow:", val.yellow_value);
            break;
    }
}
let green = {
    type: "green",
    value: "test green",
    green_value: "green value"
};
let yellow = {
    type: "yellow",
    value: "test yellow",
    yellow_value: "yellow value"
};
// 输出 "green test green is yellow: green value"
logVal(green);
// 输出 "yellow test yellow is green: yellow value"
logVal(yellow);
