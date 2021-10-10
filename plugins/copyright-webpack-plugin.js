class CopyrightWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
      console.log('compile');
    })

    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
      debugger;
      compilation.assets['copyright.txt'] = {
        source() {
          return 'copyright by jenny chan'
        },
        size() {
          return 23;
        }
      }
      cb();
    })
  }
}

module.exports = CopyrightWebpackPlugin;