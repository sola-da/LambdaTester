





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = {"_0":157}
return a*b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = "l"
base_1[1][6] = ""
argument5['AA@'] = 1.0108567164148187e+308
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = true
argument5[3.7668525981726295e+307] = ",,"
argument6['AA@'] = null
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = {"705":"_]mz","fP:LW":100,"4.55359778881739e+307":"","Q":"ul","":595,"6.479267042262326e+307":"[","7.502873583947483e+307":5e-324,"1.2211212655667634e+307":"","8.041156035420283e+307":"t"}
base_3[1][6] = null
base_3[2] = [403,25,607,0,82]
return a-b/c
};
var base_0 = [460,"&","u","pc","r",213,1.7976931348623157e+308,843]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"&","u","pc","r",213,1.7976931348623157e+308,843]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"&","u","pc","r",213,1.7976931348623157e+308,843]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,"&","u","pc","r",213,1.7976931348623157e+308,843]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test223.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)