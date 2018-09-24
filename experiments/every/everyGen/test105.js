





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = 122
base_0[6] = "Vq"
base_0[0] = "Xk[b"
return a*b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = {"":627,"i":""}
argument4[403] = [100,893,-1,607,213,618,242,122]
return a-b+c
};
var argument4 = 1.773229178732682e+308;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = 595
argument6[122] = "V"
base_2 = false
return a*b/c
};
var argument6 = "u";
var argument7 = 25;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"K{":8.694696105588629e+306,"":1.6260967795915821e+308,"1.2343896582404832e+308":122}
base_3[0][2] = {"242":242,"vG":1.2424486663838628e+308,"y":2.1285963186512492e+307,"":"[","6.051330745622199e+307":59}
return a-b/c
};
var base_0 = [82,126,82,595,242,49,403,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,126,82,595,242,49,403,893]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,126,82,595,242,49,403,893]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,126,82,595,242,49,403,893]
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
require("fs").writeFileSync("./experiments/every/everyGen/test105.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)