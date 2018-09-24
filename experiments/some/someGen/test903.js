





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[893] = false
argument2[618] = {"":""}
return a*b*c
};
var argument2 = [213];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['f!BO'] = {"627":4.871985786282849e+307,"705":100,"":"","4.349531742290095e+307":1.5128679152201422e+308,"5.613568022382557e+307":"","K[":823,"5e-324":"","S":3.4359569259349025e+307,"Z|xC":783}
return a+b+c
};
var argument4 = {"242":")","714":1.212552389512923e+308,"4.376519945301536e+307":82,"H5":"","0H":"","5O":5.037833665309879e+307,"":"T)","1(":7.434561291350071e+307,"7.87334334007118e+307":1.2868050200541133e+308};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = false
argument7[4] = {"5.745213195367911e+307":-1}
return a/b/c
};
var argument6 = {"714":0," #":1.7470166730959176e+308,"":705,"n":1.7060294122125673e+308,"`rU":"=","D":"9","8.677708826218229e+307":213};
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['j'] = 5.904946848194677e+307
return a*b+c
};
var argument9 = r_2;
var base_0 = [823,"4",126]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"4",126]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"4",126]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"4",126]
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
require("fs").writeFileSync("./experiments/some/someGen/test903.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)