





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = false
argument1[2] = "8"
return a*b*c
};
var argument2 = {"627":"","655":460,"1.6755115831931062e+308":"t","1.6249090056711218e+308":1.0295631599127113e+308,"4.960033715165713e+307":823,"'LX":607,"$":627,"":"U99"};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = false
argument5[2] = [969,213,823,1.7976931348623157e+308,618,714,-100,618,714]
return a*b*c
};
var argument4 = 0;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = 783
return a/b+c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = "D"
base_3[0][2] = ""
return a*b/c
};
var argument9 = null;
var base_0 = [0,823,783,5e-324,59]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,823,783,5e-324,59]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,823,783,5e-324,59]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,823,783,5e-324,59]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test284.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)