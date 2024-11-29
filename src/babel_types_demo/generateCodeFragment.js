const t = require('@babel/types');
const generate = require('@babel/generator').default;

// 创建一个简单的表达式
const expression = t.binaryExpression('+', t.numericLiteral(5), t.numericLiteral(3));

// 转回代码
const { code } = generate(expression);
console.log(code); // 5 + 3