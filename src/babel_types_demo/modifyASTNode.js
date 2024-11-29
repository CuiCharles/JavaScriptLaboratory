const t = require('@babel/types');

// 创建一个函数调用节点
const callExpression = t.callExpression(t.identifier('oldFunction'), [
    t.stringLiteral('argument1'),
]);

console.log('Before:', callExpression.callee.name); // oldFunction

// 修改函数名
callExpression.callee.name = 'newFunction';

console.log('After:', callExpression.callee.name); // newFunction