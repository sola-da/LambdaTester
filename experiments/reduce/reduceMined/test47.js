





var callbackArguments = [];
var argument1 = function (previous, current) {
 callbackArguments.push(arguments) 

    return current < previous ? current : previous;
};
var argument2 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument3 = false;
var argument4 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev || cur(entity);
};
var argument5 = true;
var argument6 = 213;
var argument7 = function (transformEndLength, op) {
 callbackArguments.push(arguments) 

    return transformEndLength + op.getLength();
};
var argument8 = {};
var base_0 = [25,"2tF",-1,969,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,"2tF",-1,969,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,"2tF",-1,969,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,"2tF",-1,969,595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test47.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)