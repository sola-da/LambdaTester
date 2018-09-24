





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = null
return a+b*c
};
var argument2 = 3.6473861508666023e+307;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.5109538778533692e+308] = "Lh)"
base_1[4][7] = null
return a*b/c
};
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = null
argument7[7] = {"100":5e-324,"":1.7951058125714194e+308,"1.3440165552131283e+308":-1,"1.3381379739818874e+308":""}
return a*b/c
};
var argument7 = {"4":1.48989374566486e+308,"595":9.763070896739037e+307,"1.7439475546507887e+308":"N","":655,"k9z":"","6.142286624589899e+306":2.3317351504496513e+307,"M":"]#"};
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][4] = 8.999501128654969e+307
return a*b+c
};
var base_0 = ["3<H%","kg-","]","+P","a>o","&-K3",">","z","N{yE8"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3<H%","kg-","]","+P","a>o","&-K3",">","z","N{yE8"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3<H%","kg-","]","+P","a>o","&-K3",">","z","N{yE8"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3<H%","kg-","]","+P","a>o","&-K3",">","z","N{yE8"]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test828.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)