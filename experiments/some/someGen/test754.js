





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.5109538778533692e+308] = 2.1137663733687908e+307
argument2[6] = true
return a*b+c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = [714,-100,82,82,-100,714,403,403,82,1.7976931348623157e+308]
argument5[1.0727847755854773e+308] = null
argument4['f'] = "F"
return a*b+c
};
var argument4 = null;
var argument5 = [627,893,213,126,607];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3][3] = "0"
argument7[3] = 607
argument8[9.551053197482062e+307] = [213,49,969,893,-1,0]
return a/b-c
};
var argument7 = "Z";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['V'] = [5e-324,843,157,213]
return a+b*c
};
var argument9 = [843,823];
var argument10 = true;
var base_0 = [783,126,126,595,-100,"s",")p$o","y",655,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,126,126,595,-100,"s",")p$o","y",655,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,126,126,595,-100,"s",")p$o","y",655,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,126,126,595,-100,"s",")p$o","y",655,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test754.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)