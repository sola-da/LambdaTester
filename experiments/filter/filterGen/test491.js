





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.7154103611117224e+307] = false
argument2['C'] = {"}%E":1.5369567589412995e+308,"":3.357194290061613e+306}
base_0[3][1.3434821406183095e+308] = true
return a-b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = "!"
return a/b-c
};
var argument4 = [607,122,607,595];
var argument5 = {"59":1.1733121407844689e+308,"705":7.59752212102482e+306,"qwwv":"O4M","y":"","4.887259702307234e+307":2.7564765257967287e+306,"I !FAh":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = ["j","z+",5e-324,25,"4m;i]!","MiH"]
argument8[5] = "$"
return a+b*c
};
var argument7 = false;
var argument8 = null;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[-1] = false
argument9[0] = 618
argument11 = null
return a+b/c
};
var argument10 = r_3;
var base_0 = [783,403,0,655,618,655,595,969,213]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,403,0,655,618,655,595,969,213]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,403,0,655,618,655,595,969,213]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,403,0,655,618,655,595,969,213]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test491.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)