





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    debug('file %s', file);
    fs.watchFile(file, options, function (curr, prev) {
        if (prev.mtime < curr.mtime)
            fn(file);
    });
};
var argument2 = null;
var argument3 = function (dp) {
 callbackArguments.push(arguments) 

    if (dp.isComplexProperty) {
        result[dp.name] = __map(node[dp.nameOnServer], function (v) {
            return processNoMerge(mc, dp.dataType, v);
        });
    } else {
        result[dp.name] = parseRawValue(node[dp.nameOnServer], dp.dataType);
    }
};
var argument4 = function (_, i) {
 callbackArguments.push(arguments) 

    var fullKey = prefix + splittedKey.slice(0, i + 1).join('.');
    compiler.parser.plugin('can-rename ' + fullKey, function () {
        return true;
    });
};
var argument5 = [969,82,5e-324,59];
var argument6 = function (klass, i) {
 callbackArguments.push(arguments) 

    if (klass && klass.length > 0) {
        className += (i > 0 ? ' ' : '') + klass + suffix;
    }
};
var argument7 = false;
var base_0 = [595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test284.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)