





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument2 = [460,59,59,595,157];
var argument3 = r_0;
var argument4 = function (memo, value) {
 callbackArguments.push(arguments) 

    return memo.concat(Array.isArray(value) ? flatten(value) : value);
};
var argument5 = r_0;
var argument6 = 655;
var argument7 = function (memo, value) {
 callbackArguments.push(arguments) 

    return memo.concat(Array.isArray(value) ? flatten(value) : value);
};
var argument8 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument9 = {"1.4436386630119981e+308":"!"};
var base_0 = ["#w6","7","}=)",618]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#w6","7","}=)",618]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#w6","7","}=)",618]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#w6","7","}=)",618]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test495.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)