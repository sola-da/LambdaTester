





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = false
argument2[5] = ""
base_0[1][1] = {"0":"1","607":705,"655":122,"893":1.300084349654927e+308,"":242,"H%":"*o!O+C}x#[cR!"}
return a/b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = ""
base_1[0][0] = true
argument4[3.0481490052276395e+306] = "Z"
return a+b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = ""
return a+b*c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = {":":3.4429645317548083e+307,"!+V":"S"}
return a-b*c
};
var argument8 = [843,213];
var base_0 = ["u","h{qnx"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["u","h{qnx"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["u","h{qnx"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["u","h{qnx"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test234.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)