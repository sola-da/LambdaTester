





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.8120440085202614e+307] = {"49":"w","59":"","":403,"c":403,"<":705,"6.292470962320922e+307":5.397598582057316e+307,"g]":242,"9Je":1.6152525549542885e+308,"1.29290605933447e+308":1.466807220356932e+308}
argument1[0] = {"618":"=n","1.5803295895997119e+308":655,"1.4075025766174452e+308":"9BN","s":"","_":"mr7"}
base_0[5] = null
return a+b*c-d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][2.819898637310108e+307] = false
argument5['!j'] = ""
argument4[1.1207829086460726e+308] = ""
return a/b/c*d
};
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = "Q<"
base_2[1][2] = [823,-100,783,714,618,893]
argument6[100] = ["9","1{Q3(v","Oo(XfY##y",">"]
return a-b/c-d
};
var argument6 = r_2;
var argument7 = {"62":82,"213":"]0>Dr","460":"x","i":460,"H":6.709310805679605e+307,"RE6":714,"1.6679668012642575e+308":"Nd","":1.2787697432181799e+308,"6.870533630771349e+307":""};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = "?"
argument9['F2nCX>6'] = 1.4858142323920458e+308
argument10[5] = null
return a/b*c+d
};
var argument9 = r_2;
var argument10 = null;
var base_0 = [49,122,82,705,122,607,618,969,0]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,122,82,705,122,607,618,969,0]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,122,82,705,122,607,618,969,0]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,122,82,705,122,607,618,969,0]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test706.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)