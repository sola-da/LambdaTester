





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = null
base_0['length'] = true
return a-b/c
};
var argument2 = {"126":")","893":"","":823,"1.4677087964888306e+308":618,";":"-H","1.5996664978435222e+308":"","=XH":655};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = false
base_1[0][0] = null
return a+b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = true
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = {"627":"","-100":"^r","YSM:SZ<@":"_Z","Wg2A":"","1.7976931348623157e+308":"u=p","":618,"1.6088216436963044e+308":""}
return a*b-c
};
var argument8 = r_0;
var base_0 = ["o6","R","g","aWl","]","Y","i"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o6","R","g","aWl","]","Y","i"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o6","R","g","aWl","]","Y","i"]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o6","R","g","aWl","]","Y","i"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test89.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)