





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['g]'] = null
return a*b*c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = false
return a-b-c
};
var argument5 = ["z$","N","B]["];
var argument6 = 213;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[403] = 460
argument8[893] = false
base_2[0] = 1.2860681962244126e+308
return a*b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = true
base_3[9] = {"213":"","":"!0","D":"XO","r":"","6.923454604212677e+307":"h",">r":5.3085618133155e+307,"1.0080099265726054e+308":"!AvjB,"}
return a-b+c
};
var argument9 = true;
var argument10 = {"1.3858100378640313e+308":"D"};
var base_0 = ["j","NT",714,403,"!",595,"Y 4","%"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","NT",714,403,"!",595,"Y 4","%"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","NT",714,403,"!",595,"Y 4","%"]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","NT",714,403,"!",595,"Y 4","%"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test983.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)