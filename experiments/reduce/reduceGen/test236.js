





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = 49
argument2[213] = true
return a+b-c/d
};
var argument2 = null;
var argument3 = null;
var argument4 = r_0;
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = ""
argument5[59] = {"100":893,"595":"(1","2.7464366819492874e+307":"","":4.0649391405044915e+307,"8.005009658253139e+307":"]","A":1.2536845720303016e+308,"2.666868613506383e+307":714,"1.7976931348623157e+308":"Q"}
return a/b*c*d
};
var argument7 = [403,607,627,969,157,1.7976931348623157e+308,655,823,100];
var argument8 = r_2;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = [213,823,"-"]
argument9[3] = 893
return a/b-c/d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[7] = {"460":1.7976931348623157e+308,"":618,";":242,"4.4024437858098647e+307":1.7615205041740177e+308,"-1":7.426113475533005e+307}
argument12[1] = "}"
return a+b+c+d
};
var argument12 = r_2;
var argument13 = r_0;
var base_0 = [627,49,705,"P",460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,49,705,"P",460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,49,705,"P",460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,49,705,"P",460]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test236.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)