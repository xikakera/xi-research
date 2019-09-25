# 隐藏 typescript 生成的js文件

```json
{
  "search.exclude": {
    // 不搜索有 .ts 文件的 .js 文件
    "**/*.js": {
      "when": "$(basename).ts"
    },
  },
  "files.exclude": {
    // 隐藏有 .ts 文件的 .js 文件
    "**/*.js": {
      "when": "$(basename).ts"
    },
  }
}
```
