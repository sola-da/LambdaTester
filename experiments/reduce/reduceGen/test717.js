





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = ""
argument2[4] = ["$=a)XN7","6z","{G","J","a","W%M<","FC"]
base_0[2] = {"213":"","8.887322355751651e+306":"m"}
return a-b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.359136872727139e+308] = null
return a-b*c/d
};
var argument3 = true;
var argument4 = true;
var argument5 = r_1;
var argument6 = {"25":"","607":705,"":"","4.228567245494589e+307":157,"z":460,"u":""};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = ""
argument7[1.359136872727139e+308] = {"100":242,"213":1.3515214767431871e+308,"403":9.224918458858322e+307,"1.0290169340115967e+308":3.707923072807093e+307,"-1":59,"":969,"m,uL":"0","1.0901436471052823e+308":""}
return a*b*c*d
};
var argument9 = null;
var argument10 = true;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[9.331954948603684e+307] = [627,1.7976931348623157e+308,213,49]
argument10[460] = {"49":7.151422811549586e+307,"618":"","":403,"1.823102629196868e+307":"","y":"","'7v":2.640342075545992e+307,"1.2584642973398928e+308":242,"8.408913632324815e+307":157}
base_3[2][0] = 969
return a-b*c+d
};
var base_0 = ["w","e","?","I","f","$p","2","?:a_&H","(","t"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["w","e","?","I","f","$p","2","?:a_&H","(","t"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["w","e","?","I","f","$p","2","?:a_&H","(","t"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["w","e","?","I","f","$p","2","?:a_&H","(","t"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test717.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)