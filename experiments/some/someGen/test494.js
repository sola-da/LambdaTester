





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = ["!","&","y","^","`6,3wwA","G","uc"]
argument3[0] = 3.8799929852589613e+307
argument2[618] = true
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][3] = {"714":5.227178396149932e+307,"843":59,"0beh":1.6734730993490855e+306,"1.4880009970318981e+308":618,"1.5221445741747178e+308":"$"}
return a-b-c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][3] = {"627":893,"":"","7.310302606739072e+307":""}
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = [627,618,627,-1,627,100,122,403]
argument7[122] = 6.315306768632073e+307
argument7[122] = false
return a+b+c
};
var argument6 = r_3;
var argument7 = null;
var base_0 = ["se"," RqN`","LuQ","K","z`wJ6","Gnz","5"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["se"," RqN`","LuQ","K","z`wJ6","Gnz","5"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["se"," RqN`","LuQ","K","z`wJ6","Gnz","5"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["se"," RqN`","LuQ","K","z`wJ6","Gnz","5"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test494.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)