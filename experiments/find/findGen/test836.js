





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = 655
argument2['='] = [5e-324,-100,126,1.7976931348623157e+308,705,25,126,705,-100,823]
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[705] = {"82":"","843":1.071161925977419e+308,"969":0,"":1.5125572232289595e+308,"1.7909913073671624e+308":1.5823749896730273e+308,"8.328829717023045e+307":"*_n","1.1943406884277645e+308":59,"1.3122648183075263e+308":"","`M":1.5564338992922785e+308,"&+Q1NJ ":"n"}
argument3[3.7668525981726295e+307] = false
return a*b/c
};
var argument3 = "";
var argument4 = "G";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[126] = 3.644831437865407e+307
argument6[-1] = {"6.423275694364843e+307":""}
argument6[8.748669805137695e+307] = true
return a/b+c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = true
return a/b-c
};
var argument8 = 242;
var argument9 = false;
var base_0 = [893,783,1.7976931348623157e+308,122]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,783,1.7976931348623157e+308,122]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,783,1.7976931348623157e+308,122]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,783,1.7976931348623157e+308,122]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test836.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)