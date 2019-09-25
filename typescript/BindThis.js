"use strict";
const this_val = { first_name: "xi", last_name: "kakera" };
// 可以在第一个参数绑定 this
function test_bind_string(prev_val) {
    // 可以直接使用 this
    console.log(prev_val, this.first_name, this.last_name);
}
// 输出:
//   
test_bind_string.bind(this_val)("我的名字:");
