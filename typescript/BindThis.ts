interface bindVal {
  first_name: string;
  last_name: string;
}
const this_val: bindVal = { first_name: "xi", last_name: "kakera" };

// 可以在第一个参数绑定 this
function test_bind_string(this: bindVal, prev_val: string) {
  // 可以直接使用 this
  console.log(prev_val, this.first_name, this.last_name);
}

// 输出:
//   我的名字: xi kakera
test_bind_string.bind(this_val)("我的名字:");

