





var callbackArguments = [];
var argument1 = "";
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = true
base_0[1][3] = false
argument2[0] = false
return a*b-c/d
};
var argument5 = 1.0030918516529502e+304;
var argument6 = false;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = ""
base_1[6] = 122
return a-b*c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['HMm'] = 893
argument11[655] = false
return a+b/c*d
};
var argument10 = "t='";
var argument11 = [157,595];
var argument12 = r_0;
var argument13 = {"403":"","":""};
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[3] = ""
argument12[9.331954948603684e+307] = 655
return a/b/c/d
};
var base_0 = ["_z$rZMG(;",460,"d",595,"I%;Ihv",242,705,"I60"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_z$rZMG(;",460,"d",595,"I%;Ihv",242,705,"I60"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_z$rZMG(;",460,"d",595,"I%;Ihv",242,705,"I60"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_z$rZMG(;",460,"d",595,"I%;Ihv",242,705,"I60"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test592.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)