function mergeFiles(options) {
    this.options = options;
    this.final = '';
    this.done = false;
}

mergeFiles.prototype.apply = function (compiler) {
    self = this;
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('optimize-chunks', function (chunks, modules) {
            chunks.forEach(function (chunk){ 
                if(chunk.name === undefined && !this.done) {
                    console.log(chunk)
                    console.log('------------------------------------------');
                    console.log('------------------------------------------');
                    console.log('------------------------------------------');
                    this.done = true;
                }
            });
        })
    })
    compiler.plugin('emit', function (compilation, callback) {
        var filelist = 'Hello\n';
        for (var filename in compilation.assets) {
            filelist += ' ' + filename + '\n';
        }
        filelist += '-----modules---------\n';
        compilation.chunks.forEach(function(chunk){
            filelist += chunk.name + ': ' 
                        + chunk.files.join(', ') 
                        + chunk.entrypoints.join(', ') 
                        + chunk.blocks.join(', ') 
                        + '\n';
        });
        compilation.assets['filelist.md'] = {
            source: function(){
                return filelist;
            },
            size: function(){
                return filelist.length;
            }
        }

        callback();
    });
}

module.exports = mergeFiles;