





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = false
base_0[9] = {"126":157,"823":4.552625696055163e+307,"":",","1.1071325792787777e+308":""}
base_0[1][4] = {"25":"","49":893,"783":"x&y",",Hr":1.2513382239637516e+308}
return a*b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['sJRZP'] = 1.7976931348623157e+308
base_1[6] = null
argument4[1] = ["?","w?",714,"@^",705,403,"Q","e"]
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = {"122":"H","627":655,"":126,"<":3.5379385772960256e+307,"4.442403448279495e+307":595,"8.132553905715039e+307":3.2919657270941953e+307,"<=":""}
argument5[122] = null
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = true
return a/b+c
};
var base_0 = [655,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.every(argument5)
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
require("fs").writeFileSync("./experiments/every/everyGen/test463.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)