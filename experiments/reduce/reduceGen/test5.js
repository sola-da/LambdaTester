





var callbackArguments = [];
var argument1 = 126;
var argument2 = 1.597757531995759e+308;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = {"82":122,"969":"","8.055429009809323e+307":5e-324,"5e-324":157,"":1.5120010787817552e+308,"wYSgn*":"",";vU":1.727040507346682e+308}
base_0[1] = "N"
return a/b+c/d
};
var argument5 = {};
var argument6 = false;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = "U"
return a-b/c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"49":"","627":893,"823":7.59529022135252e+306,"893":4.995242887580382e+307,"9.093691095205305e+307":"","PL:":"x","-100":"ei","o":"U","1.3408678618113266e+308":705,"1.3232215670478996e+308":"('"}
base_2 = true
return a-b*c-d
};
var argument10 = true;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = ["a!NQ","g-h"]
base_3[8] = {}
return a/b-c+d
};
var argument13 = r_3;
var argument14 = false;
var base_0 = ["B$","^Y+","n","0#","!",":","U","=h9Ww","Lw"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B$","^Y+","n","0#","!",":","U","=h9Ww","Lw"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B$","^Y+","n","0#","!",":","U","=h9Ww","Lw"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B$","^Y+","n","0#","!",":","U","=h9Ww","Lw"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test5.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)