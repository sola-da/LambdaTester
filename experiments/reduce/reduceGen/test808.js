





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = [-100,843,403,49,100,122]
return a-b-c*d
};
var argument2 = null;
var argument3 = true;
var argument4 = r_1;
var argument5 = null;
var argument6 = "cjv";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.1532786076532189e+308] = false
return a+b/c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = "vY"
argument10[3] = ""
return a*b*c/d
};
var argument9 = {"82":157,"100":714,"969":"","":"","Sxe":1.1373698926596058e+308,"1.1389816594301957e+308":"","1.147324554594071e+308":"","1.293547897959952e+307":""};
var argument10 = true;
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = false
argument9[126] = [-1,"n",25]
base_3[2][0] = true
return a+b+c*d
};
var base_0 = [242,0,-1,"5)","W(","MW","W"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,0,-1,"5)","W(","MW","W"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,0,-1,"5)","W(","MW","W"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,0,-1,"5)","W(","MW","W"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test808.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)