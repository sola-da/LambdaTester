





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][2] = false
return a-b-c+d
};
var argument2 = null;
var argument3 = 157;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][2.819898637310108e+307] = true
argument5[3] = "U]3"
argument5[1.1207829086460726e+308] = [59,0,"r","%",-1]
return a*b/c+d
};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][2] = false
argument8[2] = null
return a-b/c-d
};
var argument7 = null;
var argument8 = {"25":3.387522284690507e+307,"618":"x","627":"Z","":"","1.5482394346398888e+308":"$e+","1.4029033139063663e+308":"#","1.0780685354993242e+306":"<","K":"!","-1":"x","2.3912852519917686e+307":242};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[25] = {"213":"","Q!Zm":1.6302659389647125e+308,"w#":"","1.7914560816182587e+308":"","H":"+"}
argument11[8] = [627,627,607,"c&",82,"UOF",969]
return a+b+c*d
};
var argument10 = null;
var base_0 = ["e","Pm","u=_,","o"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e","Pm","u=_,","o"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","Pm","u=_,","o"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","Pm","u=_,","o"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test638.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)