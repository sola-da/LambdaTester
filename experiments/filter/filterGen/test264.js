





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = [607,5e-324,1.7976931348623157e+308,705,5e-324,5e-324,-100,607]
base_0 = false
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1679954109349114e+308] = {"213":3.6698691852011735e+307,"783":">`5[p","":1.0348589588018163e+308,"-100":"Y","7.695789183619612e+306":4.7160410433927986e+306}
return a*b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ["r","O","{","6V$","Dy",",","]"]
argument4[1] = ["*6Vk"]
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = 1.6704002499519329e+307
argument6[2] = 100
return a/b+c
};
var argument5 = r_1;
var argument6 = r_3;
var base_0 = [-1,",","70"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,",","70"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,",","70"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,",","70"]
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test264.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)