





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = null
return a/b/c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = [627,-1,100,126,"Yq),"]
argument4[1] = {"-1":"Mh"}
argument4[6] = 1.6622491297651641e+308
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = 1.3827887371570844e+308
return a*b/c
};
var argument5 = [122,"5",893,783,";r","B$",0,82];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = false
base_3[1][2] = ""
return a/b+c
};
var argument7 = null;
var base_0 = [5e-324,1.7976931348623157e+308,157,"e","Ah8Xhh2","U3",1.7976931348623157e+308,783,618]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,1.7976931348623157e+308,157,"e","Ah8Xhh2","U3",1.7976931348623157e+308,783,618]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,1.7976931348623157e+308,157,"e","Ah8Xhh2","U3",1.7976931348623157e+308,783,618]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,1.7976931348623157e+308,157,"e","Ah8Xhh2","U3",1.7976931348623157e+308,783,618]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test426.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)