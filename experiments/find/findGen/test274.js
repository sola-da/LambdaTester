





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"627":59}
base_0[6] = null
argument2[1.399309004356655e+308] = 7.836017053790068e+306
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = 49
return a+b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = null
base_2[1] = "QW"
base_2[6][4] = ["C","H","L",157,"Fl=",627,157]
return a/b-c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = [5e-324,-100,59,823,25,823,126,82,893]
argument6[8] = {"25":4.236981740794979e+307,"607":1.0036171412773591e+308,"783":"M","":595,"3.0754817000675394e+307":"","o6":5.132399240330538e+307,"zy":969,"1.7488517109822947e+308":"",",":1.1523445903925921e+308}
argument7[100] = ["]u]un#v","`&"]
return a*b+c
};
var base_0 = [49,59,-100,49,403,0,242,49,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,59,-100,49,403,0,242,49,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,59,-100,49,403,0,242,49,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,59,-100,49,403,0,242,49,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test274.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)