





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7.889879335222838e+307] = null
base_0[3] = 7.055238809598322e+307
base_0[4] = null
return a*b/c/d
};
var argument2 = {"100":783,"":714,"1.263770788273321e+307":1.5921169356329463e+308};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[82] = false
return a*b*c-d
};
var argument4 = true;
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = null
argument6[2] = {"1.3822518863129045e+308":1.637916515721429e+308}
argument5[0] = null
return a+b-c/d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = false
argument9[7.463432409233234e+307] = true
argument10[90] = "Zi"
return a*b*c/d
};
var argument9 = 7.588616861184595e+307;
var base_0 = ["%","{","px","U:w-","(_^","G","5","5SvB","Q,"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%","{","px","U:w-","(_^","G","5","5SvB","Q,"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%","{","px","U:w-","(_^","G","5","5SvB","Q,"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%","{","px","U:w-","(_^","G","5","5SvB","Q,"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test690.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)