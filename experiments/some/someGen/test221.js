





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = ""
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['f!BO'] = null
return a+b*c
};
var argument3 = null;
var argument4 = {"0":"","1.555483677233843e+308":157,"tQ":4.613379241129689e+306,"hP|j4":213};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['_W'] = 6.767843996117237e+307
base_2[1][3] = 6.251443983712442e+307
base_2[1][0] = [460,213,49,-100,-100,969,122,714,595]
return a/b/c
};
var argument6 = {"1.2079712668168927e+308":"","h[I5":"T-:70&","":5.033607476158719e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = ["E","M","e","dTu","Xr@z","r0Ub","u","&","W"]
argument8[2] = true
return a+b/c
};
var argument8 = [0,0,627,893];
var base_0 = ["*","#","|","z","_FC","M*","di","{OQ","a"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*","#","|","z","_FC","M*","di","{OQ","a"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*","#","|","z","_FC","M*","di","{OQ","a"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*","#","|","z","_FC","M*","di","{OQ","a"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test221.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)