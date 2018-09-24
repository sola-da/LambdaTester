





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = null
argument2[0] = 1.2802454015201034e+308
return a+b/c
};
var argument2 = {"1.5972706913399222e+308":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = "Xdj1n1"
base_1[3][1.3434821406183095e+308] = 122
argument5[0] = null
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = 783
argument6[4] = [59,714,969,783,460,627,595]
argument5[2] = "-+"
return a*b+c
};
var argument5 = 1.3240082026559278e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = null
argument8[3] = "QST="
argument8[1] = {"893":6.357788157596447e+307,"":"5","1.4152594606946776e+308":"J","aq":"PAgbyPm","8.964412382354262e+307":"","1.7352872966023471e+308":783,"6.308864418227777e+306":7.758874326316483e+307,"B":4.850459238327186e+307,"8.809993139242034e+307":"H5(Ob","-1":"$"}
return a/b/c
};
var argument7 = {"3.883690897742399e+306":1.6213149743565212e+308,"f-d":"","":969};
var argument8 = false;
var base_0 = [595,59,607,460,100,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,59,607,460,100,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,59,607,460,100,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,59,607,460,100,705]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test247.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)