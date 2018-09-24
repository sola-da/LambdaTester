





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    return !r || r === 'linked' || /^https?:\/\//.test(r) || /^gh:/.test(r) || /^github:/.test(r) || semver.satisfies(version, r);
};
var argument2 = {"5":"","627":"","714":9.417734325945222e+307,"":"","S;p":2.8467367714028316e+307,"L":8.240952960374957e+307,"k<b":2.6133178693536796e+307};
var argument3 = r_0;
var argument4 = function (v1) {
 callbackArguments.push(arguments) 

    return prevContext.fn(prevContext, v1);
};
var argument5 = null;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument8 = r_0;
var argument9 = 969;
var base_0 = ["YL","OX","[y","|","z","%","D"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["YL","OX","[y","|","z","%","D"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["YL","OX","[y","|","z","%","D"]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["YL","OX","[y","|","z","%","D"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test45.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)