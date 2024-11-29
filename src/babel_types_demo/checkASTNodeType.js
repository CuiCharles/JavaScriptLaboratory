const t = require('@babel/types');

const node = t.identifier('testVariable');

if (t.isIdentifier(node)) {
    console.log('This is an Identifier node.');
} else {
    console.log('This is not an Identifier node.');
}