





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = false
base_0 = {"100":"","122":"e","783":"","1.4942226645890611e+308":"","8.38885149819966e+307":655,"":"","1.67182779412534e+307":"","h":49}
base_0[8] = 3.465275991748032e+307
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['b'] = 242
argument3[3.7668525981726295e+307] = {"0":"2","100":"d7ZR_","122":4.120438420690295e+307,"213":122,"460":1.4141713213952432e+307,"893":1.7922092880864574e+308,"969":1.6895966684191009e+308,"":"<","A*":"o","ZUD":""}
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.0500354979187844e+308] = "0EF"
return a/b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[460] = ""
return a+b/c
};
var argument6 = r_0;
var argument7 = [618];
var base_0 = ["#0","@","?]a","fb-","7","F"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#0","@","?]a","fb-","7","F"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#0","@","?]a","fb-","7","F"]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#0","@","?]a","fb-","7","F"]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test931.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)