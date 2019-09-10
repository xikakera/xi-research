/**
 * 定一个 XiClass 的 class
 * 其中外部可以访问的变量为: name, file
 * 
 * 不能访问的为 time, version
 * 
 * 使用 getName() 返回 name;
 * 使用 getVersion() 返回 version;
 * 使用 getFile() 返回 file;
 * 使用 getTime() 返回 time;
 * 
 * 使用 thistime 返回 time;
 * 使用 thistime = new Date() 设置 time 的值
 * 
 * 定义函数时,如果值是确定的,可以不需要写返回值的类型.
 */
export class XiClass {
  private version: string;
  public name: string;
  constructor(name: string, public file: string, private time: Date = new Date()) {
    this.name = name;
    this.version = process.version;
  }

  get thistime() {
    return this.time;
  }

  set thistime(time: Date) {
    this.time = time;
  }

  getName() {
    return this.name;
  }

  getVersion() {
    return this.version;
  }

  getFile(): string {
    return this.file;
  }

  getTime() {
    return this.time;
  }

  toJSON() {
    return { name: this.name, file: this.file, time: this.time };
  }

  toString() {
    return JSON.stringify(this);
  }
}