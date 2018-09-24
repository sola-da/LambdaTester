





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = 1.0877116069311555e+308
base_0[8] = false
base_0[1][1] = {"82":705,"j":"","g":1.0541616310260551e+308,"DW":1.3052310685351466e+307,"":49,"1.6019169037820345e+308":"Ar"}
return a/b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = null
base_1[1][2] = {"0":1.6743822926198137e+308,"":4.885337019839871e+307,"1.7976931348623157e+308":"","m":""}
return a+b/c
};
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = true
base_2[3] = [823,122]
return a/b/c
};
var argument7 = true;
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3.0481490052276395e+306] = true
base_3[5] = {"59":"5","":"","PNNo1":"","1.1067496213262166e+308":0,"8.059955190940229e+307":126,"j":"","1.7716883101435581e+308":"","1.0389982206382742e+308":""}
return a-b-c
};
var argument10 = true;
var base_0 = ["C",969,969,"W"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C",969,969,"W"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C",969,969,"W"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C",969,969,"W"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test237.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)