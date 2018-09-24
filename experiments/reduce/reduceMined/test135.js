





var callbackArguments = [];
var argument1 = function (max, depName) {
 callbackArguments.push(arguments) 

    return data[depName] > max ? data[depName] : max;
};
var argument2 = null;
var argument3 = function (result, currentFunction) {
 callbackArguments.push(arguments) 

    return currentFunction(result);
};
var argument4 = r_1;
var argument5 = function (sum, number) {
 callbackArguments.push(arguments) 

    return sum += number * number;
};
var argument6 = r_1;
var argument7 = r_2;
var argument8 = function (prev, current, i, arr) {
 callbackArguments.push(arguments) 

    return doMerge(prev, current, true).tree;
};
var base_0 = ["3)","h","5d{&"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3)","h","5d{&"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3)","h","5d{&"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3)","h","5d{&"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test135.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)