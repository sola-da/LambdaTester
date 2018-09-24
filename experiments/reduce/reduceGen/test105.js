





var callbackArguments = [];
var argument1 = 2.248588450662409e+307;
var argument2 = true;
var argument3 = {"607":"'","627":242,"QhME":3.6593728587565534e+307,"":1.4660414176404784e+308,"$Hx:}":1.4292775210404945e+308};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 1.7322871249152676e+308
return a-b-c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = 1.2022124481359662e+308
return a-b+c*d
};
var argument6 = {"893":1.4934708311493006e+308,"1.4819558762392014e+308":1.3975460493543956e+308,"":"VG","v":"2@("};
var argument7 = true;
var argument8 = "FK]";
var argument9 = 82;
var argument10 = "";
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = 1.3234555030220715e+308
base_2['length'] = {"":"#","LD":1.2706965947076564e+308,"l":1.2563348983511832e+308,"n`":1.3064412294633565e+308,"2.2993967346293704e+306":"P%","1.7124661715463567e+308":607,"-ZI65S":3.7577106625090977e+307}
return a/b+c/d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13 = false
return a*b/c/d
};
var argument13 = 655;
var base_0 = [595,607,242,213,"?","Ho96"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,607,242,213,"?","Ho96"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,607,242,213,"?","Ho96"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,607,242,213,"?","Ho96"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test105.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)