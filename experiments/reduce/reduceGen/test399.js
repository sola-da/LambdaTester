





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['Cb'] = 9.598391798239848e+307
return a+b-c*d
};
var argument5 = {"627":"p"};
var argument6 = null;
var argument7 = [25,618,49,122];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.359136872727139e+308] = [618,126,0,969,-100,595,893,25,595]
base_1[1] = null
argument6[3] = {"25":"","":"","s4":"","U":"e","1.6531237203828828e+308":"","1.9406799646468724e+307":1.6295552437667719e+307}
return a+b-c-d
};
var argument9 = null;
var argument10 = r_0;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[126] = "Es:"
base_2[4] = "v"
return a-b*c+d
};
var argument13 = {"705":"U","V":"","6.898806873592904e+307":"","1.6779857906854687e+308":122,"":"LC+Gp","%":"","_":1.7646059527961267e+308,"9.973600037284269e+306":705};
var argument14 = r_0;
var argument15 = true;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[82] = null
argument13[8] = true
return a+b-c/d
};
var base_0 = ["hP","pJ","h-]"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["hP","pJ","h-]"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["hP","pJ","h-]"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["hP","pJ","h-]"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test399.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)