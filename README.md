# 项目启动

## 安装pnpm
```
npm install -g pnpm

npx pnpm add -g pnpm
```

## 安装依赖
```
pnpm i
```

## 开发服务启动
```
pnpm dev
```
## 目录结构
```
|- src
    |- api 远程调用
    |- configs 环境差异配置
    |- components 通用组件
    |- helper 工具函数
    |- pages 页面组件
    |- router 路由配置
```
## 部署

待完成

# 组件添加

https://ant.design/components/overview-cn/

在antd官网预览并选择组建，在项目中使用以下方式引入即可:

```js
import {Table, Tag, Space} from 'antd'

```

# 提交规范
```js
Git message

feat: {
    description: 'A new feature',
    title: 'Features',
    emoji: '✨',
},
fix: {
    description: 'A bug fix',
    title: 'Bug Fixes',
    emoji: '🐛',
},
docs: {
    description: 'Documentation only changes',
    title: 'Documentation',
    emoji: '📚',
},
style: {
    description:
        'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    title: 'Styles',
    emoji: '💎',
},
refactor: {
    description:
        'A code change that neither fixes a bug nor adds a feature',
    title: 'Code Refactoring',
    emoji: '📦',
},
perf: {
    description: 'A code change that improves performance',
    title: 'Performance Improvements',
    emoji: '🚀',
},
test: {
    description: 'Adding missing tests or correcting existing tests',
    title: 'Tests',
    emoji: '🚨',
},
build: {
    description:
        'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    title: 'Builds',
    emoji: '🛠',
},
ci: {
    description:
        'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
    title: 'Continuous Integrations',
    emoji: '⚙️',
},
chore: {
    description: "Other changes that don't modify src or test files",
    title: 'Chores',
    emoji: '♻️',
},
revert: {
    description: 'Reverts a previous commit',
    title: 'Reverts',
    emoji: '🗑',
}

```