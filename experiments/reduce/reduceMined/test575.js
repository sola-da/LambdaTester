





var callbackArguments = [];
var argument1 = function (result, currentFunction) {
 callbackArguments.push(arguments) 

    return currentFunction(result);
};
var argument2 = true;
var argument3 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return util.mergeObjects(acc, parent.queryParams);
};
var argument4 = r_0;
var argument5 = "`";
var argument6 = function (previous, current) {
 callbackArguments.push(arguments) 

    return current < previous ? current : previous;
};
var argument7 = function (params, paramName) {
 callbackArguments.push(arguments) 

    params[paramName] = rootParams[paramName];
    return params;
};
var argument8 = true;
var argument9 = {"783":2.287192392495372e+307,"4.273591666054041e+307":1.4456434069271093e+308,"1H=im":"^#&t","":1.2582811767154877e+307,"E":"","1.9790907935240508e+307":"6","1.26850174334409e+308":7.667346353135682e+307,"9.065568984505817e+307":2.482908916231815e+307};
var base_0 = [893,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test575.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)