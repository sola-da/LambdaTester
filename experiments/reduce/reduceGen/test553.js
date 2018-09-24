





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = ""
return a/b*c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = -1
argument3[4] = true
argument4['18{'] = true
return a*b/c/d
};
var argument3 = false;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627] = {"59":122,"126":"","+ $Y":59,"k-":"RQ","":705,"4m":">","6.21217030568762e+307":9.417485144865296e+307,"5.784851784880739e+307":"3'*","&%":3.154929347611975e+307}
argument7[59] = [25,893,705,213]
argument7[1.3938918493123786e+308] = "4"
return a/b/c+d
};
var argument6 = {"59":-100,"126":5.886953368939646e+307,"627":2.567076267493634e+307,"823":7.477669602007243e+306,"893":1.2675363159302145e+308,"3.4170635696140196e+307":"j","1!":"","(yG":705,"1.0695829659520655e+308":843};
var argument7 = "";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = ["V0","@Lr<","[","_n","27","3","!M7","}","yc","N"]
base_3[0][3] = ""
argument10[595] = 0
return a/b-c+d
};
var base_0 = ["h$","]","Z<","p"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h$","]","Z<","p"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h$","]","Z<","p"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h$","]","Z<","p"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test553.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)