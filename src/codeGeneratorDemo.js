const generator = require('@babel/generator').default
const t = require('@babel/types')

// 创建函数名标识符
const funcIdenti = t.identifier('multiply')


// 创建参数标识符
const param1 = t.identifier('a');
const param2 = t.identifier('b');


// 创建返回语句
const returnStatement = t.returnStatement(
    t.binaryExpression('*', param1, param2)
);

// 创建函数声明
const funcDeclaration = t.functionDeclaration(
    funcIdenti,
    [param1,param2],
    t.blockStatement([returnStatement])
)


const output = generator(funcDeclaration,{},'').code;


console.log(output);

