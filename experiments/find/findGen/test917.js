





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = [242,655,213,-1,595,49,607]
argument3['AO?'] = null
argument2[1.0500354979187844e+308] = null
return a/b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = [126,122]
argument4[705] = {"157":893,"595":"","5.090087183182486e+307":"","bB":"","5.470653770261324e+307":"","3.458721779294e+307":"","":"^Z","V":"Js","1.6114718880347105e+308":"T*m"}
argument5[783] = ""
return a+b-c
};
var argument4 = 122;
var argument5 = {"":714};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = 1.2395435293256825e+308
argument8['W'] = true
return a*b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[126] = 4.4935934277490924e+307
argument8[25] = {"49":213,"705":"","":1.5518154403329031e+308,"V8":242,"3.0103010298339316e+306":7.904658534678188e+307}
argument8[1.0500354979187844e+308] = "Va"
return a-b/c
};
var argument8 = null;
var argument9 = r_2;
var base_0 = [25,783,122,5e-324,157,242]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,783,122,5e-324,157,242]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,783,122,5e-324,157,242]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,783,122,5e-324,157,242]
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
require("fs").writeFileSync("./experiments/find/findGen/test917.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)