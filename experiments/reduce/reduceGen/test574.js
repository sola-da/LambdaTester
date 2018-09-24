





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.359136872727139e+308] = null
argument3[627] = [-100,1.7976931348623157e+308,213,-100,-1,157,893]
argument2[-1] = [213,460,607]
return a*b-c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][0] = null
return a*b-c-d
};
var argument6 = null;
var argument7 = "";
var argument8 = 1.2098895911282553e+308;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = true
return a+b*c+d
};
var argument10 = null;
var argument11 = {};
var argument12 = r_3;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][9.12287810829114e+307] = false
argument12[0] = 618
argument12[655] = "+"
return a-b/c+d
};
var base_0 = [100,157,"l$P","u0",595,5e-324,"I(3V("]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,157,"l$P","u0",595,5e-324,"I(3V("]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,157,"l$P","u0",595,5e-324,"I(3V("]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,157,"l$P","u0",595,5e-324,"I(3V("]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test574.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)