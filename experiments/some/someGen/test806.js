





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5][0] = false
base_0[4][7] = 1.7976931348623157e+308
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2.249941463060761e+307] = null
argument3['k<7bJ'] = false
return a-b-c
};
var argument3 = ["dv","5","`3",")","}r6","Pe"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[157] = -100
return a+b+c
};
var argument5 = [893,618,25,49,403,403];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['n,5s@s'] = {"1.805913987288332e+306":1.4838774039633875e+308,"":1.7018775268115436e+308}
base_3[6] = {"403":1.7976931348623157e+308," ":"=","":25,"3.4856449172165307e+307":"","9.426817923328325e+307":"*l","8.700643471899794e+307":655,"J":""}
argument7['Y'] = ""
return a/b-c
};
var argument7 = null;
var argument8 = r_2;
var base_0 = ["0","k"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0","k"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0","k"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0","k"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test806.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)