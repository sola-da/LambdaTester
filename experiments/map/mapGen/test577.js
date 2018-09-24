





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][4] = true
base_0[0][1] = null
base_0[2]['f'] = false
return a*b*c
};
var argument2 = r_0;
var argument3 = {"100":"","618":783,"714":"&","-1":"","":"","3O?_":"k","3.019514013626386e+307":8.26599783381042e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"25":0,"2.732070959848452e+307":""}
argument5[2] = 4.533907707486283e+307
return a-b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = null
argument8['T'] = [1.7976931348623157e+308,460,460,893,705,0,59,100]
return a/b+c
};
var argument7 = 242;
var argument8 = {"":"7"};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = "u"
argument10[9.869573703797622e+307] = {"82":618,"783":1.5621564249534946e+308,"":"","1.1758508881378284e+308":""}
return a*b+c
};
var argument10 = null;
var argument11 = null;
var base_0 = [100,1.7976931348623157e+308,1.7976931348623157e+308,59,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test577.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)