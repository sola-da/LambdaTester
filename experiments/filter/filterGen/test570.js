





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3.377960715099946e+307] = ["D%","!","}N","dQ","$S","w","Y[,"]
argument2['h'] = [122,1.7976931348623157e+308,213,655]
argument2[1] = null
return a/b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1]['!cck7Mm'] = " "
argument4[1.1679954109349114e+308] = [460,"Z*P","v3",823,122,823,242,655,")en:T"]
argument5[3] = {"242":122,"":":=","1.1256607326122407e+308":4.560277336943018e+307,"4.645665012422871e+306":"","](J":"","g":705,"9.29493270883707e+307":"{","&":"V)","6.865445323943246e+307":1.0816377165693247e+308}
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = false
return a-b+c
};
var argument5 = false;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['h'] = "]@"
return a-b-c
};
var argument8 = null;
var base_0 = [969,"^sD",843,213,49,714,"*","r1",25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,"^sD",843,213,49,714,"*","r1",25]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,"^sD",843,213,49,714,"*","r1",25]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test570.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)