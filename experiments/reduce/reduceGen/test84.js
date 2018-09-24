





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = 9.70204190278619e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = ["na","J","X","9","f","lW"]
base_0[7] = false
argument2[3] = ""
return a+b*c*d
};
var argument5 = false;
var argument6 = null;
var argument7 = 2.5290589556117073e+307;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = [82,460,-100,126]
argument5 = true
base_1[5] = ["y",":","N","Jd","!Wn","P","49","do","S"]
return a*b*c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = [0,823,122,59,-100,0,157,618,843,705]
return a-b+c/d
};
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = {"":"%","3l":"Q","M":"&q","1.2469169054561013e+307":"9G","Q":"d","1.1477452761104629e+308":"UDI"}
return a*b+c/d
};
var argument12 = null;
var base_0 = [607,242,-1,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,242,-1,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,242,-1,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,242,-1,607]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test84.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)