





var callbackArguments = [];
var argument1 = null;
var argument2 = [969,82,823,59];
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = [627,823,893]
argument2[1.1277822633002616e+308] = {"969":"I","":"O","1.5191608092957229e+308":"o+3W","9.319081405314465e+307":0,"1.7584281721517412e+308":100,"1.7364668455243997e+308":4.830465180206952e+307,"1.9305515978258529e+307":6.514765821864365e+306,"1.3279959198054731e+308":460,"5.870007448830008e+307":893,"-100":705}
return a*b-c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = null
base_1[1][3] = ["Y","E","^HY#H"]
return a-b-c-d
};
var argument6 = null;
var argument7 = null;
var argument8 = true;
var argument9 = null;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[6.35085648319999e+307] = null
return a*b*c/d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14['HMm'] = null
argument13[627] = ["Rc","_","q"]
argument14[627] = null
return a*b/c-d
};
var argument13 = 7.508133366965162e+307;
var argument14 = [-100,618,595,59,823,823,655];
var base_0 = [5e-324,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test353.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)