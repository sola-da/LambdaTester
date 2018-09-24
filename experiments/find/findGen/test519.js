





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f-d'] = ""
return a*b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = false
base_1[0][2] = true
return a/b*c
};
var argument4 = [59,126,1.7976931348623157e+308];
var argument5 = "VqS,G'";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['AA@'] = [126,213,655,242,893,969,607]
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[25] = false
argument9[783] = null
argument9[126] = {"655":7.777941465249828e+306,"823":9.71386799611749e+307,"893":2.748406191247521e+307,"1.0161967833980923e+308":618,"-100":1.1803056219646861e+308,"3.7242679418146147e+306":"","":"!","1.0812678601456858e+308":""}
return a*b+c
};
var argument8 = "'";
var argument9 = true;
var base_0 = [655,5e-324,"S<",705,")n0H",618,126]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,5e-324,"S<",705,")n0H",618,126]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,5e-324,"S<",705,")n0H",618,126]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,5e-324,"S<",705,")n0H",618,126]
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
require("fs").writeFileSync("./experiments/find/findGen/test519.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)