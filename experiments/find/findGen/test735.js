





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1881593224845412e+308] = null
base_0[1] = false
return a+b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][6] = ""
return a/b*c
};
var argument4 = r_1;
var argument5 = {"7":"","8":"","122":705,"":242,"6.949630915607762e+307":0,"4.1856744207978237e+306":893};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = 1.4387859726201242e+308
argument7[1.399309004356655e+308] = 8.933134599137883e+307
argument7['j'] = 59
return a*b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = [655,627,893,122,607,49,-1,607]
base_3[7] = 1.0585900495678712e+308
argument9 = [627,595]
return a+b/c
};
var argument8 = 1.7976931348623157e+308;
var argument9 = r_2;
var base_0 = [",a",":","F"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",a",":","F"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",a",":","F"]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",a",":","F"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test735.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)