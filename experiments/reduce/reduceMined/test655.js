





var callbackArguments = [];
var argument1 = function (entries, dir) {
 callbackArguments.push(arguments) 

    var isDraft = dir.charAt(0) === '_';
    if (!isDraft && isDirectory(path.join(__dirname, dir)))
        entries[dir] = path.join(__dirname, dir, 'app.js');
    return entries;
};
var argument2 = {"9":8.248375605689746e+307,"iQ":"","":2.864832914980868e+307,"1.1996628523310154e+308":1.5347135813630436e+308};
var argument3 = null;
var argument4 = function (params, paramName) {
 callbackArguments.push(arguments) 

    params[paramName] = rootParams[paramName];
    return params;
};
var argument5 = function (sum, number) {
 callbackArguments.push(arguments) 

    return sum += number * number;
};
var argument6 = true;
var argument7 = null;
var argument8 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return util.mergeObjects(acc, parent.queryParams);
};
var argument9 = true;
var base_0 = [213,0,25,655,59,100,0,213,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,0,25,655,59,100,0,213,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,0,25,655,59,100,0,213,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,0,25,655,59,100,0,213,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test655.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)