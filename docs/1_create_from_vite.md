# 1. reference
https://cn.vitejs.dev/guide/

# 2. create a directory
mkdir vue3-scaffold  
cd ..

# 3. init project from vite(npm 7)
npm init vite@latest vue3-scaffold -- --template vue
// 敲黑板：用上面这个语境创建的项目，依赖的是vue2
// 修正：yarn remove vue; yarn add vue@next, 检查package.json
// mait.ts报错：模块 ""vue"" 没有导出的成员 "createApp"

# 4. build and run
cd vue3-scaffold
npm install
npm run dev

or:  
yarn  // as npm install    
yarn dev // as npm dev run

# 5. check and access
curl http://localhost:3000/