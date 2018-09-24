





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.108492555774111e+307] = 618
argument3['!j'] = {"213":"","3.7800154508246547e+307":5e-324,"":1.4300176490708098e+308,"1.1044992058710231e+307":1.7597968103442236e+308,"1.335748157165834e+308":"O32snR","8.353604266731451e+307":"","p":25,"A5Wf":403,"P5o":59}
return a*b/c-d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][1] = ""
base_1[1][5] = {"783":"","893":"m","];":1.1032344265777276e+307,"g":5.816415916657784e+307,"2.497926407458783e+307":"","b":"d&AX","7.585164041357352e+305":1.714893272306246e+308,"":"B","1.261878268249963e+308":1.2405526209817034e+308}
argument4[4] = 6.531643608830508e+307
return a*b/c-d
};
var argument4 = "";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1][4] = 1.1544469948252638e+308
argument7[7] = ""
return a+b+c+d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = ["_Aq","Bx6","d","M","N[&","`%S",")("]
argument8['F2nCX>6'] = null
return a/b*c+d
};
var argument8 = [-1,122,100,25,843,157,460];
var base_0 = [705,893,213,25,1.7976931348623157e+308,-100,705]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,893,213,25,1.7976931348623157e+308,-100,705]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,893,213,25,1.7976931348623157e+308,-100,705]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,893,213,25,1.7976931348623157e+308,-100,705]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test933.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)