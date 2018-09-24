function extractResults(sandbox){
    var obj = {'callbackArguments':[],'baseValues':[],'returnValues':[]};
    obj.callbackArguments = sandbox.callbackArguments;
    var keys = Object.keys(sandbox);
    for (var i=0; i<keys.length; i++){
        var key = keys[i];
        if (key.indexOf('base_')>-1){
            var val = sandbox[key];
            if (typeOf(val) === 'object'){
                val.constructor && val.constructor.name!=='Array'? obj.baseValues.push(val.constructor.name):obj.baseValues.push(val)

            }else{
                obj.baseValues.push(val);
            }

        }
        if (key.indexOf('r_')>-1){
            var val = sandbox[key];
            if (typeOf(val) === 'object'){
                val.constructor && val.constructor.name!=='Array' ? obj.returnValues.push(val.constructor.name):obj.returnValues.push(val)

            }else{
                obj.returnValues.push(val);
            }


        }

    }

    return obj;
}
function typeOf(value) {
    if (value instanceof Array) return 'array';
    if (value === null) return "null";
    return typeof value;
}
var fs = require("fs");

var deleteFolderRecursive = function(path) {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

exports.extractResults = extractResults;
exports.typeOf = typeOf;
exports.deleteFolder = deleteFolderRecursive;
