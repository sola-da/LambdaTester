





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = "V"
argument2[1.612812046173122e+308] = [25,1.7976931348623157e+308,49,607,705,655]
return a*b+c+d
};
var argument2 = {"655":1.7976931348623157e+308,"5{":1.1941544302104452e+308,"`<-":""};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = true
return a+b/c/d
};
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = true
argument6[126] = 5.297467959550266e+307
argument7[627] = 5.177903963836169e+307
return a*b-c*d
};
var argument7 = false;
var argument8 = false;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[90] = false
return a*b+c/d
};
var base_0 = [607,100,627,49,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,100,627,49,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,100,627,49,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,100,627,49,627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test769.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)