





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"100":"","893":627,"":"","+":"",",":"","MU":"Zg","f":""}
argument2 = null
base_0[8] = 1.3369161644775293e+308
return a+b/c
};
var argument2 = ["]","#<","ha$x&","Z*D","@t"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"25":1.7896424044035328e+308,"49":843,"126":"3-o","":"","1.4120152067033575e+308":"R","=":"","R":"","MO":6.978165069380095e+306,"z":""}
base_1[1][2] = 126
argument4[5] = "I"
return a-b/c
};
var argument4 = true;
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = null
return a-b*c
};
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = false
argument9[3] = [100,655,-100]
argument8 = {}
return a-b+c
};
var argument9 = r_1;
var argument10 = "";
var base_0 = [0,607,618,595,893,1.7976931348623157e+308,823,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,607,618,595,893,1.7976931348623157e+308,823,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test43.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)