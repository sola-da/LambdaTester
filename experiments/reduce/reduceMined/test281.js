





var callbackArguments = [];
var argument1 = function (count, op) {
 callbackArguments.push(arguments) 

    return count + op.getLength();
};
var argument2 = function (object, localizedDigit, i) {
 callbackArguments.push(arguments) 

    object[localizedDigit] = String(i);
    return object;
};
var argument3 = true;
var argument4 = function (memo, el, i) {
 callbackArguments.push(arguments) 

    if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el)))
        memo.push(el);
    return memo;
};
var argument5 = function (params, paramName) {
 callbackArguments.push(arguments) 

    params[paramName] = rootParams[paramName];
    return params;
};
var argument6 = {"82":"9k","607":"T?LS{J"," ":893,"":"V","h":1.9887810608221318e+307,"7.918015620340516e+307":3.090116693462502e+307};
var base_0 = [714,"3N}:e",705,"<G",1.7976931348623157e+308,100,627,783,"&(0g"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"3N}:e",705,"<G",1.7976931348623157e+308,100,627,783,"&(0g"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"3N}:e",705,"<G",1.7976931348623157e+308,100,627,783,"&(0g"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"3N}:e",705,"<G",1.7976931348623157e+308,100,627,783,"&(0g"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test281.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)