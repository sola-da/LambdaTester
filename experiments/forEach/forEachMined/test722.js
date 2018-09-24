





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    delete self.remote[key];
};
var argument2 = false;
var argument3 = null;
var argument4 = function (n) {
 callbackArguments.push(arguments) 

    B(t, n, e);
};
var argument5 = function (r) {
 callbackArguments.push(arguments) 

    r.entityAspect && r.entityAspect.validateEntity();
};
var argument6 = function (index) {
 callbackArguments.push(arguments) 

    this._userIndexesToSingleDim[index] = null;
};
var base_0 = ["nH",";P4","8muoi"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["nH",";P4","8muoi"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["nH",";P4","8muoi"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["nH",";P4","8muoi"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test722.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)