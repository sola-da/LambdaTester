





var callbackArguments = [];
var argument1 = true;
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = 1.7976931348623157e+308
base_0 = -100
argument2 = null
return a+b*c/d
};
var argument5 = false;
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"157":607,"":595,"1.4933234000283627e+308":"YQ","'":""}
argument6[1] = "W]j"
return a-b-c*d
};
var argument9 = null;
var argument10 = r_0;
var argument11 = ["Dz(j","-U","#UJ`","z"];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b+c+d
};
var argument13 = {"59":"H","655":"L","":8.353356233632349e+307,"{":655,"1.1259993326640715e+308":"yU"};
var argument14 = [893];
var argument15 = r_1;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14 = ""
argument13[1] = ["D","V","5v",";wlPiAWPl","P","NNZ"]
return a-b/c/d
};
var base_0 = ["<g1",82,"s%","dOe;>","D",969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<g1",82,"s%","dOe;>","D",969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<g1",82,"s%","dOe;>","D",969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<g1",82,"s%","dOe;>","D",969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test64.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)