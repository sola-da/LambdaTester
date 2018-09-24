





var callbackArguments = [];
var argument1 = function (ret, name) {
 callbackArguments.push(arguments) 

    ret[name] = genesis.lookupType(fields[name]);
    keys.push(name);
    offsets[name] = bytes;
    bytes += ret[name].bytes;
    return ret;
};
var argument2 = false;
var argument3 = "+";
var argument4 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument5 = r_1;
var argument6 = r_1;
var argument7 = function (memo, val) {
 callbackArguments.push(arguments) 

    return memo ? memo[val] : undefined;
};
var argument8 = function (p, v) {
 callbackArguments.push(arguments) 

    return { sighting: p.sighting + 1 };
};
var argument9 = null;
var base_0 = [783,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,0]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test351.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)