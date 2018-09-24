





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[969] = [157,627,893]
argument3[3] = true
return a*b+c
};
var argument2 = ["*)","*K","#@k","0r","r","v","K","9r5;z"];
var argument3 = 5.306965627289696e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['='] = 7.310900488778069e+307
argument6[403] = false
argument5[705] = [655,0,655,618,82]
return a-b-c
};
var argument5 = r_0;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[126] = ""
return a*b*c
};
var argument8 = [595,823,213,122,403,627,783,126];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = false
return a/b+c
};
var argument10 = "i";
var argument11 = ["$]","l","(]A","+{"];
var base_0 = [705,"w",5e-324,969,607,"#Ad",-100,126]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,"w",5e-324,969,607,"#Ad",-100,126]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,"w",5e-324,969,607,"#Ad",-100,126]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,"w",5e-324,969,607,"#Ad",-100,126]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test597.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)