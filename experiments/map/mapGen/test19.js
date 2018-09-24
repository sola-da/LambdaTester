





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"25":"j","59":969,";d)(":"","":1.7150906483740117e+308}
return a*b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = {"59":"","d,":"Wps","9.304615598281424e+307":"n(","1.469361293611305e+308":"","<":"","":5e-324,"L ":"P5","2.8658677598373907e+307":1.7976931348623157e+308}
return a+b-c
};
var argument4 = [100,5e-324,0];
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = 403
base_2[8] = {"":460,"-1":"#7","1.7976931348623157e+308":"","q4":"4","k&oM":"C","Hae":1.4756003737002343e+308}
base_2[5] = {"P":"j","6.99694947330616e+307":"","4.7123056762905045e+306":618,"4.83249577808004e+307":"{`f","1.0270209966003137e+308":403}
return a/b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = false
return a/b+c
};
var argument8 = 1.0231834871420547e+308;
var base_0 = ["mway$","p&","8","t"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test19.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)