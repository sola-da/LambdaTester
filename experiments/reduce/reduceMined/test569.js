





var callbackArguments = [];
var argument1 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev.concat(cur);
};
var argument2 = function (m, kvs) {
 callbackArguments.push(arguments) 

    var kv = kvs.split('=');
    m[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
    return m;
};
var argument3 = true;
var argument4 = function (params, paramName) {
 callbackArguments.push(arguments) 

    params[paramName] = rootParams[paramName];
    return params;
};
var argument5 = [843,213];
var argument6 = function (memo, value) {
 callbackArguments.push(arguments) 

    return memo.concat(Array.isArray(value) ? flatten(value) : value);
};
var argument7 = null;
var base_0 = [618,5e-324,242,126,823,403,460,783,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,5e-324,242,126,823,403,460,783,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,5e-324,242,126,823,403,460,783,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,5e-324,242,126,823,403,460,783,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test569.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)