





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = 1.354930699281676e+307
base_0[5][0] = true
return a+b+c
};
var argument2 = "jen ";
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = 2.654627737327459e+307
argument5[6] = false
base_1[5][1] = {"893":1.7976931348623157e+308,"5e-324":4.85291016789038e+307,"V":"s{VfxmXXcKE","1.3481127226720866e+307":"X","":82,";`":"J_","z":460}
return a+b*c
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][5] = ""
return a*b/c
};
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = "{"
argument10[705] = null
return a/b+c
};
var argument10 = r_1;
var argument11 = 100;
var base_0 = ["j","l",-100,5e-324,843,"R","W="]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","l",-100,5e-324,843,"R","W="]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","l",-100,5e-324,843,"R","W="]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","l",-100,5e-324,843,"R","W="]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test423.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)