





var callbackArguments = [];
var argument1 = false;
var argument2 = {"157":"","y5":1.1538466699389005e+308,"4.477656593268337e+307":1.0401542918899588e+308,"":"","Q7xw'rt":2.292388760306458e+307,"3.1813632072827835e+307":5.825507838809935e+307};
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ""
argument2[1.1532786076532189e+308] = {"655":"","":"r%","_K":1.7976931348623157e+308,"9.59099712881109e+307":"","N?":"CmE"}
argument3[59] = [893,893,25,59,403,49,607,-100]
return a*b+c*d
};
var argument5 = r_0;
var argument6 = r_0;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = 607
argument7[7.889879335222838e+307] = ["X","hm",403,"t"]
return a*b+c+d
};
var argument9 = false;
var argument10 = "orME";
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = ["c{bN"]
argument9['s'] = {"0":"","25":"F","595":"{+G1|","893":-100,"3k":823,"5.716074914486456e+307":893,"":"","1.1420679034003236e+308":""}
argument11[25] = [242,969,-1,618,705]
return a+b*c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = false
return a-b+c-d
};
var argument14 = null;
var base_0 = [100,607,122,25,-100,595,1.7976931348623157e+308,-100,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,607,122,25,-100,595,1.7976931348623157e+308,-100,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,607,122,25,-100,595,1.7976931348623157e+308,-100,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,607,122,25,-100,595,1.7976931348623157e+308,-100,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test841.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)