





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = ""
base_0[5] = {"8.320238668137953e+307":"$"}
base_0[4] = ""
return a/b+c+d
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = ["!",":",714,"=h9Ww","Lw","|",122,607,157]
base_1[2] = 1.4035206283305774e+308
return a-b+c/d
};
var argument5 = 9.761941018035852e+307;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = {"":"{_g"}
base_2 = {"":"ZlT","!":1.5120010787817552e+308}
argument7 = 82
return a-b/c/d
};
var argument7 = 1.7945022024024169e+308;
var argument8 = {"7":1.2926110887799269e+308,"49":"","82":122,"595":"","705":823,"":783,"2.3631158592004544e+306":"",">}":"","U":4.875709646462175e+307,"7.59529022135252e+306":"PL:"};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
argument10 = ["H","L","y"]
return a*b-c*d
};
var argument10 = false;
var argument11 = true;
var base_0 = [126,"Y",714]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,"Y",714]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,"Y",714]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,"Y",714]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test4.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)