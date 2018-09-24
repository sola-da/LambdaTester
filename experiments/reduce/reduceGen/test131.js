





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = 893
argument2[2] = 5e-324
base_0[0][0] = {"100":"!","126":1.7976931348623157e+308,"":"r"}
return a+b+c/d
};
var argument2 = 100;
var argument3 = null;
var argument4 = null;
var argument5 = true;
var argument6 = {"213":-1,"618":"","z":"S+?","@I":"bF","1.6427081439628758e+308":";","":"","Q":"","6.682205594087392e+307":"'"};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = [969,607,893,893,126]
argument6[0] = null
return a/b*c/d
};
var argument8 = null;
var argument9 = "";
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = [618,49,618,242,157,242,460,122,-100]
base_2[6] = false
argument9[1] = "<"
return a+b/c/d
};
var argument12 = true;
var argument13 = r_0;
var argument14 = r_0;
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[4] = "'q6]"
return a-b+c/d
};
var base_0 = [1.7976931348623157e+308,705,213,843]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,705,213,843]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,705,213,843]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,705,213,843]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test131.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)