





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    return v2(v);
};
var argument2 = [627];
var argument3 = ["|","T","3","*","n|n","]=I","?[R","g#ab"];
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var argument5 = function (r) {
 callbackArguments.push(arguments) 

    return !r || r === 'linked' || /^https?:\/\//.test(r) || /^gh:/.test(r) || /^github:/.test(r) || semver.satisfies(version, r);
};
var argument6 = null;
var argument7 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var base_0 = [595,893,157,595,0,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,157,595,0,82]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,157,595,0,82]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,157,595,0,82]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyMined/test386.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)