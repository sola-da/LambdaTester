





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6.949630915607762e+307] = "B"
argument2[126] = {"126":6.429934509944339e+307,"":1.7976931348623157e+308,"c":9.025763467511772e+307,"1.7486982539076328e+308":"cV"}
argument2['j'] = 1.4084911587391664e+308
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = {"627":4.871985786282849e+307,"705":100,"":"","4.349531742290095e+307":1.5128679152201422e+308,"5.613568022382557e+307":"","K[":823,"5e-324":"","S":3.4359569259349025e+307,"Z|xC":783}
return a+b+c
};
var argument3 = {"242":")","714":1.212552389512923e+308,"4.376519945301536e+307":82,"H5":"","0H":"","5O":5.037833665309879e+307,"":"T)","1(":7.434561291350071e+307,"7.87334334007118e+307":1.2868050200541133e+308};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = false
argument5['f-d'] = {"5.745213195367911e+307":-1}
return a/b/c
};
var argument5 = {"714":0," #":1.7470166730959176e+308,"":705,"n":1.7060294122125673e+308,"`rU":"=","D":"9","8.677708826218229e+307":213};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = 5.904946848194677e+307
return a*b+c
};
var argument8 = r_2;
var base_0 = [893,783,627,82,49,5e-324,893,595]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,783,627,82,49,5e-324,893,595]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,783,627,82,49,5e-324,893,595]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,783,627,82,49,5e-324,893,595]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test892.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)