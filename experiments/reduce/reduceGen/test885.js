





var callbackArguments = [];
var argument1 = r_0;
var argument2 = true;
var argument3 = 1.469432019374155e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = 4.712606702692725e+307
argument2[-1] = [1.7976931348623157e+308,-1]
base_0['length'] = {"242":"8","969":4.08300981466427e+307,"":3.8942095410343486e+307,"6.297058672490397e+307":1.4425309735899194e+308,"7.704496107961989e+307":213,"1.699739083472049e+308":25,"%V":"r","z":"Z","3.7277353132674377e+307":"$1","1.6762291155362534e+307":""}
return a/b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = "m"
return a+b+c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {" ":"","":"{`"}
base_2 = null
return a*b*c*d
};
var argument7 = true;
var argument8 = ["I[:","O","U","+","5>"];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = {}
argument9['s'] = null
argument10[9.331954948603684e+307] = true
return a-b-c/d
};
var base_0 = [607,100,25,49,655,1.7976931348623157e+308,618,25,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,100,25,49,655,1.7976931348623157e+308,618,25,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,100,25,49,655,1.7976931348623157e+308,618,25,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,100,25,49,655,1.7976931348623157e+308,618,25,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test885.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)