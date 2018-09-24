





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = true
base_0[8] = [-100,157,607]
base_0[7] = true
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = true
argument3[157] = ["n]6`","P;","nu"]
argument3[3] = false
return a*b*c
};
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.1679954109349114e+308] = {"100":"","460":"","":"v","C'iS":-100}
base_2[4][7] = true
return a+b/c
};
var argument6 = [607,618,100,969,843];
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.7847438319683965e+308] = {"705":"u","":"$+P","1.0693760843967886e+307":"O","7.863433587284906e+307":"","4.063926819385979e+307":1.2752949752228228e+308,"w":1.5106855979975905e+308,"{":"[{@Y"}
base_3[4] = {"843":"","7V":"l","":"","Dr":"[","7.14770173801727e+307":"","jL":1.0333197941352056e+308}
return a/b+c
};
var argument9 = null;
var base_0 = [627,122,82,-1]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,122,82,-1]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,122,82,-1]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test356.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)