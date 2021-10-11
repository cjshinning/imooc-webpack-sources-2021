const fs = require('fs');
const parser = require('@babel/parser');

const moduleAnalyser = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = parser.parse(content, {
    sourceType: "module"
  });
  console.log(ast.program.body);
}

moduleAnalyser('./src/index.js');