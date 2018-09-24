





var callbackArguments = [];
var argument1 = function (pathRe) {
 callbackArguments.push(arguments) 

    return pathRe.test(path);
};
var argument2 = {};
var argument3 = null;
var argument4 = function (obj, index) {
 callbackArguments.push(arguments) 

    actual[index] = obj;
    numberOfRuns += 1;
    if (numberOfRuns == 3) {
        return true;
    }
    return false;
};
var argument5 = 1.1292220190494528e+308;
var argument6 = function cb_some(pair) {
 callbackArguments.push(arguments) 

    return pair[0] === 'Framework' && pair[1] === 'express';
};
var argument7 = r_0;
var argument8 = r_0;
var argument9 = function (def) {
 callbackArguments.push(arguments) 

    return def.message === 'Parameter';
};
var base_0 = [100,969,783,618,213,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,969,783,618,213,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,969,783,618,213,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,969,783,618,213,1.7976931348623157e+308,705,843,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test142.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)