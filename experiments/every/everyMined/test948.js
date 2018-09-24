





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    return !r || r === 'linked' || /^https?:\/\//.test(r) || /^gh:/.test(r) || /^github:/.test(r) || semver.satisfies(version, r);
};
var argument2 = null;
var argument3 = 1.2298396738390312e+308;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument5 = "";
var argument6 = false;
var argument7 = function (dep) {
 callbackArguments.push(arguments) 

    return list[dep];
};
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument9 = [627,25,5e-324,122];
var argument10 = true;
var base_0 = ["_",783,213,-1,893,893,"Je",893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_",783,213,-1,893,893,"Je",893]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_",783,213,-1,893,893,"Je",893]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_",783,213,-1,893,893,"Je",893]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyMined/test948.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)