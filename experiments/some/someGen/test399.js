





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = {"595":"y8f","bo":"A","":"","1.5323173937644542e+308":59}
argument2[4.224481734419934e+307] = [969,"4","D`=@ALZ",460,655,"1vm4,)",627,"gj","x"]
base_0[1] = false
return a-b/c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['f'] = {"8":893,"460":705,"1.2088948802525054e+308":"#","":-1,"1.4849901113530571e+308":"","1.5353607029470389e+307":4.395867260275494e+307,"8.746279461342109e+307":82,"N2":"z","7.451289082389112e+307":126}
argument5[1] = true
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = null
argument7[4] = true
return a-b*c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = 705
argument8[6] = "K`"
argument8[9] = false
return a+b-c
};
var argument8 = r_1;
var base_0 = [843,607,655,969]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,607,655,969]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,607,655,969]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,607,655,969]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test399.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)