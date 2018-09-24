





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = ""
argument2[82] = [-1,82,714,893,893,627,460,5e-324,82]
return a-b/c-d
};
var argument2 = [714,618,618,627,893,607,607];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2.1280896016417002e+307] = {"":"_%zOZ"}
argument5[595] = null
argument4[1.1277822633002616e+308] = true
return a-b-c+d
};
var argument4 = {"783":"",")JhNfp":"{"};
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = true
argument5[4] = {"157":"Sj","242":">e","783":6.027468583366918e+307,"893":"","":"","5.710507432193329e+307":1.1901287801877734e+307,"<w+-!":""}
argument4[4] = null
return a*b-c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = "%oh"
return a-b/c*d
};
var base_0 = [157,607,618,843,893,100,893,242,823,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,607,618,843,893,100,893,242,823,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,607,618,843,893,100,893,242,823,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,607,618,843,893,100,893,242,823,595]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test443.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)