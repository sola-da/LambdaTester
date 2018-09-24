





var callbackArguments = [];
var argument1 = null;
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = [122,126,595,823,-1,618,893,705]
base_0[7] = null
base_0[8] = [126,893,242,783,783]
return a+b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = 1.6949035876480206e+308
return a-b/c*d
};
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = ""
return a*b/c+d
};
var argument8 = r_1;
var argument9 = 4.53982754931092e+307;
var argument10 = r_1;
var argument11 = {"126":126,"":460,")":714,"L":"","dM":9.378999482912522e+307,"%&":82,"2.2044057074964926e+307":"","1.4702384175455994e+308":"1"};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = [59,714,242,5e-324,1.7976931348623157e+308,627,100,-100,157,893]
argument9[4] = null
return a-b-c*d
};
var base_0 = [1.7976931348623157e+308,213,893,705,"l"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,213,893,705,"l"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,213,893,705,"l"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,213,893,705,"l"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test163.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)