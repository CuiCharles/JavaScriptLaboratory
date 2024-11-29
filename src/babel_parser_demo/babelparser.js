const parser = require('@babel/parser')

const code = `const square = (n) => n * n;`;

//解析为ast
const ast = parser.parse(code,{
    sourceType:'module',
    plugins:['jsx','typescript']
});

console.log(ast)

