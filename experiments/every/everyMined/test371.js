





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return superset.indexOf(elem) !== -1;
};
var argument2 = {"2":"n","607":"","823":"G`E","pz":"","":969,"F":"JG"};
var argument3 = null;
var argument4 = function (def) {
 callbackArguments.push(arguments) 

    return def.message === 'ImplicitGlobalVariable';
};
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument6 = function (t) {
 callbackArguments.push(arguments) 

    var dd = dimDescr[t], val = dd.orgValue && !dd.categorical ? dd.orgValue[d[t]] : d[t];
    return val >= filter[t].min && val <= filter[t].max;
};
var argument7 = r_1;
var argument8 = null;
var base_0 = [823,595,618,59]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,595,618,59]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,595,618,59]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,595,618,59]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyMined/test371.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)