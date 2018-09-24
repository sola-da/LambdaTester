





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[655] = null
argument2[460] = 595
argument3[1] = "U:"
return a/b/c+d
};
var argument2 = false;
var argument3 = false;
var argument4 = 403;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = ""
argument4[213] = [714,-1,0,126,823,714,122,655]
return a+b+c-d
};
var argument7 = false;
var argument8 = r_2;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2.1280896016417002e+307] = false
argument7['s'] = null
return a+b*c+d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[25] = 6.442089372979884e+307
argument13[1.359136872727139e+308] = {"122":"^p",",9":59,"":969,"^":"","l":"","2#E":100,"1.7250769979162076e+308":"H","1.7976931348623157e+308":1.0403358484934544e+308}
return a-b/c/d
};
var argument12 = null;
var argument13 = r_2;
var base_0 = [843,823,"Q","%_"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,823,"Q","%_"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,823,"Q","%_"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,823,"Q","%_"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test798.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)