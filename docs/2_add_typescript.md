# 1. reference
https://github.com/Microsoft/TypeScript-Vue-Starter#typescript-vue-starter  
https://www.runoob.com/typescript/ts-install.html  

# 2. add typescript
// npm install --save-dev typescript webpack webpack-cli ts-loader css-loader vue vue-loader vue-template-compiler

yarn add --dev typescript webpack webpack-cli ts-loader css-loader vue vue-loader vue-template-compiler


# 3. add tsconfig.json
tsc --init
// generate tsconfig.json file for tsc command options  
// https://zhuanlan.zhihu.com/p/145210784  

# 4. add src/shims-vue.d.ts
? why ?  
https://juejin.cn/post/6844903882309500942  

# 5. modify index.html
* modify before:  
`<script type="module" src="/src/main.js"></script>`  
* modify after:  
`<script type="module" src="/src/main.ts"></script>`  

# 6. add eslint
yarn add --dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser ipt-eslint/eslint-plugin

# 7. create .eslintrc.js

# 8. create prettier.config.js
