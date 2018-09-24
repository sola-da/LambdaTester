





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = true
return a+b/c
};
var argument2 = "b$";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['j'] = {"":126,"uW":"","w":"","toL":"$","c":"","o0":460,"1.4289238322489734e+308":1.3225923747295144e+308,"6.741004815369359e+307":"","hB9C":""}
argument5[1.6798476101238045e+308] = "T"
return a-b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9] = null
return a/b*c
};
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.6798476101238045e+308] = 126
base_3[1][0] = {"783":"h*","":"","1.0325117097960891e+308":403,"9.619841103634622e+307":4.538654082067886e+307,"1.4688501108681803e+308":157,")":"","6.52671187274092e+307":",1","XW":""}
argument10[4] = ["(s",157,"*","F","w",213,714,242,"A"]
return a+b/c
};
var argument9 = [607,-100,595,969,242,595,595,122];
var base_0 = [893,82]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,82]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,82]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,82]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test891.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)