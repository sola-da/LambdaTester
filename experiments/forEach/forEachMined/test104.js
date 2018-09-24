





var callbackArguments = [];
var argument1 = function (completer) {
 callbackArguments.push(arguments) 

    if (completer.identifierRegexps) {
        completer.identifierRegexps.forEach(function (identifierRegex) {
            if (!prefix && identifierRegex)
                prefix = util.retrievePrecedingIdentifier(line, pos.column, identifierRegex);
        });
    }
};
var argument2 = null;
var argument3 = function (fn) {
 callbackArguments.push(arguments) 

    if (!fn.only || (fn.only = 'prop' && type == 'prop') || fn.only == 'attr' && type != 'prop') {
        fn.call(elem, value, boolValue, isVal ? 'val' : curType, type);
    }
};
var argument4 = true;
var argument5 = true;
var argument6 = function (c) {
 callbackArguments.push(arguments) 

    c._updateBox();
};
var argument7 = function (src) {
 callbackArguments.push(arguments) 

    if (!grunt.file.isFile(src))
        return;
    grunt.log.debug('Processing ' + src);
    var contents = grunt.file.read(src);
    contents = replace(contents);
    contents = include(contents, path.dirname(src));
    var dest = path.normalize(srcDest.dest + path.sep + src.replace(baseDir, ''));
    grunt.log.debug('Saving to', dest);
    grunt.file.write(dest, contents);
    grunt.log.ok('Processed ' + src);
};
var base_0 = [82,"g",595,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,"g",595,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,"g",595,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,"g",595,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/forEach/forEachMined/test104.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)