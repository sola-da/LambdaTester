





var callbackArguments = [];
var argument1 = function (et) {
 callbackArguments.push(arguments) 

    return findOrCreateEntityGroup(em, et);
};
var argument2 = true;
var argument3 = function (part) {
 callbackArguments.push(arguments) 

    part = part.replace(/:/g, '_');
    return _ = path.join(_, part);
};
var argument4 = 2.669686278317354e+307;
var argument5 = "ms";
var argument6 = function (a) {
 callbackArguments.push(arguments) 

    return a.eval(env);
};
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    return this[key];
};
var base_0 = ["Q","Q"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Q","Q"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Q","Q"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Q","Q"]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test428.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)