const { transformSync} =require('@babel/core')


const code = `
    let a = 2
    const b = 3

`;

const babelConfig = {
    plugins:['./plugins/index.js']
}

const output = transformSync(code,babelConfig);


console.log(output.code)