





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['a'] = true
argument2[3.0481490052276395e+306] = 5.065014910384262e+307
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = "*"
return a/b*c
};
var argument3 = "(";
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['1SHF1'] = false
argument6[5.062647675476955e+307] = ""
argument6['-'] = {"2":618,"c_":1.7702162786566768e+308,"":" ","1.3698388226565846e+308":""}
return a/b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 9.913798433325089e+306
argument7[2][783] = null
return a+b/c
};
var base_0 = [705,126,122,82,1.7976931348623157e+308,-1,843,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,126,122,82,1.7976931348623157e+308,-1,843,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,126,122,82,1.7976931348623157e+308,-1,843,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,126,122,82,1.7976931348623157e+308,-1,843,783]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test725.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)