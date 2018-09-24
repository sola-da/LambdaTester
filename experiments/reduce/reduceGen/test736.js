





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1277822633002616e+308] = {"126":1.7349794352000907e+308,"595":"HJ","627":"","1.3648325312972869e+308":242,"":"Cp","b":6.957023047568698e+307}
argument3[6.35085648319999e+307] = true
argument3['18{'] = null
return a-b*c*d
};
var argument2 = {"":2.4237377879993637e+307,"1.1532786076532189e+308":""};
var argument3 = "";
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = true
argument3[4] = null
return a*b*c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = true
argument8[627] = {"59":"","122":1.7445391789088273e+308,"403":"","9.56336884853062e+307":"e","1.2214339291359119e+308":4.3760244945806174e+307,"8.540062203531481e+307":1.2827753446274256e+308}
base_2[2][0] = true
return a/b+c+d
};
var argument8 = null;
var argument9 = null;
var argument10 = r_0;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = [82,122,595,460,714,969,618,714,126]
argument9[7] = [403,1.7976931348623157e+308,0]
base_3[0][0] = "R"
return a+b/c/d
};
var base_0 = [403,157,705,59,5e-324,783,157,705,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,157,705,59,5e-324,783,157,705,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,157,705,59,5e-324,783,157,705,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,157,705,59,5e-324,783,157,705,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test736.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)