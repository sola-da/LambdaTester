





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = [100,969]
return a+b+c+d
};
var argument2 = r_0;
var argument3 = r_1;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = "&qs"
argument2[126] = null
base_1[0][9.12287810829114e+307] = [1.7976931348623157e+308,100,0,823,59,1.7976931348623157e+308,843,59,843,-1]
return a*b*c+d
};
var argument6 = true;
var argument7 = r_0;
var argument8 = r_1;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[59] = {"5.677375433452027e+307":157,"":-1,"g":1.4445113771106277e+308,"2.2554425945760193e+307":1.3787182682553866e+308,">":"f"}
base_2[0][3] = true
argument8[25] = "u"
return a*b+c-d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[0] = [157,122,100,82,157,126,705,49,-1]
return a*b*c+d
};
var argument11 = null;
var argument12 = {"242":"XK","655":8.690592159054067e+306,"893":"-","9.258605555295628e+307":"","9.072123727582963e+307":1.1546783937189794e+308,"":213,"7.512055161523307e+307":"","1.3887192537041398e+308":"","S":5.470722189505318e+306};
var base_0 = [213,126,705,823,843,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,126,705,823,843,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,126,705,823,843,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,126,705,823,843,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test783.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)