





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7][2] = {"969":"C$","z":"",")":3.738479226795186e+307,"-1":"6","":"z"}
argument2[618] = [714,126]
return a-b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = 49
base_1[3][2][5] = false
return a-b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[618] = 49
argument6[1] = "O"
argument6[3] = false
return a*b/c
};
var argument5 = {"cN":618,"W":1.0946158624261901e+308,"1.7976931348623157e+308":4.867876833960713e+306,"4.1439083158128944e+307":213,"-":"","Z<":1.160869539564015e+308};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
return a/b-c
};
var argument8 = r_3;
var argument9 = r_2;
var base_0 = ["J","*","@$S","_","A","B`e","zw","#","c9r"]
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
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J","*","@$S","_","A","B`e","zw","#","c9r"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test481.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)