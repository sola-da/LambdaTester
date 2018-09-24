





var callbackArguments = [];
var argument1 = function (e, i, a) {
 callbackArguments.push(arguments) 

    a[i] = String.fromCharCode(e);
};
var argument2 = null;
var argument3 = 157;
var argument4 = function (child) {
 callbackArguments.push(arguments) 

    child._create();
};
var argument5 = r_1;
var argument6 = function (msg) {
 callbackArguments.push(arguments) 

    if (message.text === msg.text && message.severity === msg.severity) {
        found = true;
    }
};
var argument7 = function (dep) {
 callbackArguments.push(arguments) 

    findUnmet(obj.dependencies[dep]);
};
var base_0 = [-1,893,969,843,-100,100,893,783,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,893,969,843,-100,100,893,783,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,893,969,843,-100,100,893,783,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,893,969,843,-100,100,893,783,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test925.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)