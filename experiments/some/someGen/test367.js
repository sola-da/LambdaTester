





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = true
return a/b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['5L'] = ["g",":","2","E","F","+","{x<O","PB"]
argument4['f!BO'] = {"59":"","1.3715192901414022e+307":59,"5.125557438179696e+307":242,"5J":"","":5.431715432314543e+307,"1.076832147384313e+307":1.0815119918979892e+308,"c":"N","8.519450576630195e+307":""}
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['5L'] = ""
argument5[618] = {"893":-1,"Rxc-o":"8","3.112624783775883e+307":7.053396205942065e+307,"3.448343150040892e+306":"",":":49}
argument5[618] = {"59":1.515150649380959e+308,"":"M0","1.1596322454353835e+308":1.318080797077948e+308,"1.7970189351845126e+308":7.303201808839228e+307,"1.4279613862868489e+308":2.7608538342741447e+307}
return a/b*c
};
var argument5 = r_2;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = null
base_3 = [1.7976931348623157e+308,618,"`hIs","Zl"]
return a*b*c
};
var argument7 = r_2;
var base_0 = ["`",843,"r","FP","G"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`",843,"r","FP","G"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`",843,"r","FP","G"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`",843,"r","FP","G"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test367.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)