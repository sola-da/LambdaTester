





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][6] = null
argument3[2] = 403
argument3[2] = "|"
return a+b*c
};
var argument2 = {"403":"W","":655,"9.040704211187284e+307":1.4169337274917292e+308,"1.1265804403615626e+308":"","8.570244137059251e+307":"N","_":9.351701935709114e+307,"1.6275086071205838e+308":213,"1.9097830510613482e+307":"<","t":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = [122,100,126,655,595,607]
return a-b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"0":"","9":82,"82":"o","893":"f","":-1,")B":"Y","6.559917048981678e+307":"","1.1901986145868116e+308":"@"}
base_2[0][1] = ")"
return a-b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[122] = false
argument8[6] = "B"
argument7['sJRZP'] = null
return a*b/c
};
var argument7 = false;
var argument8 = null;
var base_0 = [":","0#RO*%a_","_0","m<","#<","]","<","lgRq]"," v%","e"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":","0#RO*%a_","_0","m<","#<","]","<","lgRq]"," v%","e"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":","0#RO*%a_","_0","m<","#<","]","<","lgRq]"," v%","e"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":","0#RO*%a_","_0","m<","#<","]","<","lgRq]"," v%","e"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test559.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)