





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = false
base_0[4] = [823,1.7976931348623157e+308,893,655,607,618,49,1.7976931348623157e+308]
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = false
return a-b-c
};
var argument3 = false;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = 4.580392935219308e+307
base_2[9] = {"460":1.3382251933623215e+308,"3.2768122113772786e+307":7.199462034830367e+307,"GA":"","Ai":126,"d":"","1.6876019566301912e+308":6.26129877936528e+306,"":595,"1.7851690667848995e+308":2.658642706683212e+306}
argument6[4] = 1.3220952108893917e+308
return a/b+c
};
var argument6 = false;
var argument7 = 6.281818320924515e+307;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3.3156198695370476e+307] = {"3":627,"655":242,"":"A","5.363145681208597e+307":607,"R!":1.3012111342136087e+308,"1.2238933131852547e+308":"","3.6321782039462993e+307":"l-","P":"","^":"1!","b":627}
argument9 = {"59":82,"213":460,"783":7.199261918198738e+307,"7.243667515947209e+307":"","9.721867297649217e+307":5.645701295363337e+307,"'f4@":"@z","":122}
base_3[0][2] = {"1.1212006659341165e+308":100,"e":"HWvwX","":""}
return a-b-c
};
var base_0 = [82,1.7976931348623157e+308,595,595]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,1.7976931348623157e+308,595,595]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,1.7976931348623157e+308,595,595]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,1.7976931348623157e+308,595,595]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test132.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)