





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = null
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = true
base_1[0] = ""
base_1 = 3.4180005246191977e+307
return a*b/c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = null
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = 25
argument6[0] = {"82":8.424780862500706e+307,"100":1.1834083841601277e+308,"242":"`","":3.666444914131809e+307,"1.3884302730272398e+308":157,"6.813784185741731e+307":"w","4fk":"Z","hXT":618,"1.3916272773255564e+308":-100,"=":1.1020106163079041e+308}
argument6['io'] = false
return a+b*c
};
var argument6 = null;
var base_0 = [595,595,618,705,100,213]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,595,618,705,100,213]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,595,618,705,100,213]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,595,618,705,100,213]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test879.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)