





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[627] = [213,"%",460,";","JT"]
return a*b*c/d
};
var argument2 = null;
var argument3 = {"969":126,"f<5":1.7976931348623157e+308,"":59,"0N":"","UPxY4":1.5856764194370627e+308,"1.2314614140161055e+308":"","^N":"","7.292240291600865e+307":">U9R","A":""};
var argument4 = false;
var argument5 = [122,969];
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = [714,"j",595,0,-100,"I",705]
argument6['HMm'] = "7"
return a/b-c+d
};
var argument8 = {"25":1.3606405312439596e+308,"100":"51x","":122,"8.004569497000529e+307":100,"1.7699593222688548e+308":82};
var argument9 = {"25":1.7976931348623157e+308,"213":"|","823":"8Sx","":"","B2`FU":1.4508919731708804e+308,"8.324009472434981e+307":"^%","wT_tA":1.7976931348623157e+308};
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = 25
base_2[3] = null
argument10['18{'] = true
return a/b+c+d
};
var argument12 = r_0;
var argument13 = 0;
var argument14 = null;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12 = {"":9.04488982847386e+307}
base_3[4] = null
argument14[0] = ""
return a+b+c/d
};
var base_0 = ["PgL8;;12@:@6","1Py","}","y}dm","p","FJH","L","T"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["PgL8;;12@:@6","1Py","}","y}dm","p","FJH","L","T"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["PgL8;;12@:@6","1Py","}","y}dm","p","FJH","L","T"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["PgL8;;12@:@6","1Py","}","y}dm","p","FJH","L","T"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test643.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)