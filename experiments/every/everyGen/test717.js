





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[783] = ""
argument3 = 403
return a+b-c
};
var argument2 = {"49":"w","59":"","d":"","g]":242,"":403,"9Je":1.6152525549542885e+308,"1.29290605933447e+308":1.466807220356932e+308};
var argument3 = {"618":"=n","1.5803295895997119e+308":655,"1.4075025766174452e+308":"9BN","s":"","_":"mr7"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = ""
argument5[4.960033715165713e+307] = [714,157,705,122,969,823,1.7976931348623157e+308,618,843,157]
return a*b+c
};
var argument5 = 157;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = true
return a/b-c
};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = false
argument9[5] = ""
return a/b*c
};
var base_0 = ["Tjvh;",607,"n",627,"d|","v",242]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Tjvh;",607,"n",627,"d|","v",242]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Tjvh;",607,"n",627,"d|","v",242]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Tjvh;",607,"n",627,"d|","v",242]
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
require("fs").writeFileSync("./experiments/every/everyGen/test717.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)