// src/index.js
const letToVar = function(babel) {
    const { types, template } = babel;
    return {
        visitor: {


            VariableDeclaration(path) {
                console.log("VariableDeclaration",path.node.kind)
            },

            VariableDeclarator(path){
                //console.log("VariableDeclarator",path.node)
            },

            Identifier(path){
                console.log("Identifier",path.node.name)
            }

        }
    }
}
module.exports = letToVar;