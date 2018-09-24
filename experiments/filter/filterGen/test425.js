





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"242":1.0842621837709848e+308}
argument3[7] = ["_D*<","]","|","K","g","Em9BH"]
return a+b*c
};
var argument2 = false;
var argument3 = {"0":25,"25":8.884115110299682e+307,"5.396120403923176e+307":969,"1.6132214699012676e+308":2.9189636035360856e+307,"9.845170366352209e+307":"","6.953509754330277e+307":"","":"","1.1493780975395038e+307":705};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['c'] = true
return a/b-c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][5e-324] = 595
argument8[5] = "="
argument7[1.7847438319683965e+308] = true
return a-b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = [242,122,"`","qZj","[*","{"]
base_3[5] = null
return a*b*c
};
var argument8 = r_2;
var argument9 = ["v","LX","yF3","_","p"];
var base_0 = [607,82,0,655,100,122,618,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,82,0,655,100,122,618,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,82,0,655,100,122,618,618]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test425.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)