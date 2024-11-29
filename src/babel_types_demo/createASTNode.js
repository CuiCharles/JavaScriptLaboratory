const t = require('@babel/types');

// 创建标识符
const identifier = t.identifier('myVariable');

// 创建数值字面量
const literal = t.numericLiteral(42);

// 创建变量声明
const variableDeclaration = t.variableDeclaration('const', [
    t.variableDeclarator(identifier, literal),
]);

console.log(JSON.stringify(variableDeclaration, null, 2));