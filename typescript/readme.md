# typescript 研究

## 安装

```bash
# 全局安装 typescript (推荐)
npm install -g typescript

# 全局安装帮助
tsc -h

# 目录安装
npm install --save-dev typescript

# yarn
yarn add --dev typescript

# 目录安装帮助
npx tsc -h
```

***说明***: `npx <commend>` 是 npm 自带的,运行当前目录下的 node_modules 的命令行程序的命令

## 初始化目录

```bash
# 生成 tsconfig.json
tsc --init
```

### tsconfig.json

[tsconfig.json](./tsconfig.json)

`target`: 开发 node 应用时, 把当前的值修改为最近的 es 版本 (ES2019) 就行 .

`outDir`: 输出 js 文件的目录, 不选择则在 ts 文件同一目录下输出.

`baseUrl`: 根目录

`paths`: 默认 import 目录, 设置之后,就不需要在 import 时使用 `import * from "./types/XiResearch"`, 可以直接写 `import * from "XiResearch"`.  
