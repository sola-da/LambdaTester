





var callbackArguments = [];
var argument1 = function (obj, pair) {
 callbackArguments.push(arguments) 

    var i = pair.indexOf('='), key = pair.slice(0, i), val = pair.slice(++i);
    obj[key] = decodeURIComponent(val);
    return obj;
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof tree.Rule && r.variable === true) {
        hash[r.name] = r;
    }
    return hash;
};
var argument5 = null;
var argument6 = function (obj, key) {
 callbackArguments.push(arguments) 

    obj[key] = item[key];
    return obj;
};
var argument7 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument8 = false;
var base_0 = [627,1.7976931348623157e+308,1.7976931348623157e+308,59,627,714,893,783,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,1.7976931348623157e+308,1.7976931348623157e+308,59,627,714,893,783,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,1.7976931348623157e+308,1.7976931348623157e+308,59,627,714,893,783,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,1.7976931348623157e+308,1.7976931348623157e+308,59,627,714,893,783,59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test350.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)