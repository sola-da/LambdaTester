





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument2 = true;
var argument3 = function (id) {
 callbackArguments.push(arguments) 

    return ids.indexOf(id) >= 0;
};
var argument4 = {"-":"OS","":1.7945908744122196e+307,">":9.975457392247751e+307,"&":"U"};
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    return t;
};
var argument6 = function (entity) {
 callbackArguments.push(arguments) 

    var aspect = entity.entityAspect;
    var isValid = aspect.entityState.isDeleted() || aspect.validateEntity();
    return !isValid;
};
var argument7 = r_3;
var argument8 = "C";
var base_0 = ["#","W5"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","W5"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","W5"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test934.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)