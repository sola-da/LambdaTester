





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    if (a)
        visited[a] = true;
    if (b)
        visited[b] = true;
    return 0;
};
var argument2 = false;
var argument3 = function (length, op) {
 callbackArguments.push(arguments) 

    return length + op.getLength();
};
var argument4 = null;
var argument5 = {};
var argument6 = function (obj, key) {
 callbackArguments.push(arguments) 

    obj[key] = item[key];
    return obj;
};
var argument7 = null;
var argument8 = "WZ";
var argument9 = function (params, paramName) {
 callbackArguments.push(arguments) 

    params[paramName] = rootParams[paramName];
    return params;
};
var argument10 = false;
var argument11 = r_3;
var base_0 = [627,403,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,403,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,403,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,403,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test249.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)