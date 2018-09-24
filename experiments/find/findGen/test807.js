





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = {"627":2.85588205230259e+307,"6.83580805943386e+307":"","3.099973646657322e+307":"`|","":"'e"}
argument3[2] = {"403":"","595":627,"783":"","843":1.2903546391762857e+308,"*FU":"","&'":"","1.5505320665090638e+307":3.3448306063336e+307,"$":1.5552355514644017e+308}
argument2[7] = null
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = null
base_1[0][3] = null
return a/b*c
};
var argument3 = r_0;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][6] = ""
argument6[1.0500354979187844e+308] = [627,618,823,595,59,82,1.7976931348623157e+308,0,607]
argument5[4] = "g"
return a-b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = true
base_3[0][6] = "5"
argument7[3.7668525981726295e+307] = null
return a/b/c
};
var argument7 = true;
var base_0 = [595,-1,49,595,49,714,783]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,-1,49,595,49,714,783]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,-1,49,595,49,714,783]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,-1,49,595,49,714,783]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test807.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)