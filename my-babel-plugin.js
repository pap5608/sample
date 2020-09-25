module.exports = function myBabelPlugin() {
    return  {
        visitor : {
          VariableDeclaration(path) {
            console.log('VariableDecalration() kind:', path.node.kind); //const
            
            // const => var로 변환
            if(path.node.kind === 'const') {
                path.node.kind = 'var';
            }

          }
        }
    }
}