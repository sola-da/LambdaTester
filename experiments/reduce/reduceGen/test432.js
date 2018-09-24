





var callbackArguments = [];
var argument1 = false;
var argument2 = {"1.5801738521493218e+308":"","4.510832583925046e+305":"2","":"Y","1.7133774679918044e+308":""};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1280896016417002e+307] = 823
argument2[82] = ""
return a/b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = false
argument5['Cb'] = [25,242,823,1.7976931348623157e+308]
return a-b*c/d
};
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['*c'] = true
return a*b+c*d
};
var argument9 = {"82":3.562146923959553e+307,"p?":627,"":"","L":"","][":1.6204649761450865e+308};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = {"49":1.0727858412402534e+308,"242":"M!S","823":"","Iw=]":"","":1.7976931348623157e+308,"y":607,"7.622608571407932e+307":1.1112234992838736e+308,"1.208358085723173e+308":1.4153638487159647e+308,"-1":893,"5.7519528062402e+307":"N"}
argument11[213] = ""
base_3[8] = null
return a/b+c/d
};
var argument11 = false;
var argument12 = null;
var base_0 = [25,"=2]BO","6wFFdoqKv"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,"=2]BO","6wFFdoqKv"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,"=2]BO","6wFFdoqKv"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,"=2]BO","6wFFdoqKv"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test432.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)