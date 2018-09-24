





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][4] = ""
return a+b+c
};
var argument2 = [157,100];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = null
base_1[0] = [783,242,783,843,5e-324,25,460,1.7976931348623157e+308,82]
return a-b-c
};
var argument4 = [607,627,49,49,5e-324,49,0,242];
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][6] = ")"
argument7['sJRZP'] = null
base_2[1][6] = true
return a-b+c
};
var argument7 = [25,969,705,242,-1,783,823,893,607];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = ""
base_3[1][2] = "(B"
return a+b*c
};
var argument9 = {"82":714,"N":1.7656992356271254e+308,"1.3934209271118598e+308":8.385189073366524e+305,"":714,"g*y":893,"a":"","1.2002628701405182e+307":-100,"-1":823,"1.0897103782914562e+308":893,"U":7.443863149769165e+307};
var base_0 = [843,783,242,627,627,157,242,655,126]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,783,242,627,627,157,242,655,126]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,783,242,627,627,157,242,655,126]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,783,242,627,627,157,242,655,126]
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
require("fs").writeFileSync("./experiments/every/everyGen/test664.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)