





var callbackArguments = [];
var argument1 = function (systems, name) {
 callbackArguments.push(arguments) 

    systems[name] = list[name].system;
    return systems;
};
var argument2 = function (obj, pair) {
 callbackArguments.push(arguments) 

    var i = pair.indexOf('='), key = pair.slice(0, i), val = pair.slice(++i);
    obj[key] = decodeURIComponent(val);
    return obj;
};
var argument3 = function (obj, item) {
 callbackArguments.push(arguments) 

    obj[item] = 1;
    return obj;
};
var argument4 = {};
var argument5 = function (a, b) {
 callbackArguments.push(arguments) 

    if (a)
        visited[a] = true;
    if (b)
        visited[b] = true;
    return 0;
};
var base_0 = [1.7976931348623157e+308,"e","S","B+f;",783,893,"[7",-1,","]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"e","S","B+f;",783,893,"[7",-1,","]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"e","S","B+f;",783,893,"[7",-1,","]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"e","S","B+f;",783,893,"[7",-1,","]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test626.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)