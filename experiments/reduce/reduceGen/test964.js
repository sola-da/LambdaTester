





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = null
return a+b-c-d
};
var argument2 = false;
var argument3 = true;
var argument4 = {"157":"","403":893,"3z":1.082180472133004e+308,"":595,"M":"Vtb*zJ"};
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['s'] = true
argument6[7.889879335222838e+307] = null
return a+b/c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = false
argument10[595] = null
return a*b-c-d
};
var argument9 = false;
var argument10 = ["eQr]q"];
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13['18{'] = [403,969,969,893,0,627]
return a/b/c*d
};
var argument12 = true;
var base_0 = [460,"Tw<X","I",1.7976931348623157e+308,"Q4","D","V"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"Tw<X","I",1.7976931348623157e+308,"Q4","D","V"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"Tw<X","I",1.7976931348623157e+308,"Q4","D","V"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,"Tw<X","I",1.7976931348623157e+308,"Q4","D","V"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test964.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)