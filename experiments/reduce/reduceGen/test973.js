





var callbackArguments = [];
var argument1 = null;
var argument2 = [460,-100,59,893,213,5e-324,122,126,460];
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = {"7":3.415050318158228e+307,"126":"","Autd":618,"4.914110902179949e+307":1.39045038372273e+308,"=":";sT","":1.4362152432689306e+307}
return a-b*c*d
};
var argument5 = true;
var argument6 = 0;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = false
argument7[1] = [714,5e-324,-1,213,59,403]
return a-b+c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = false
argument9['s'] = ""
return a/b+c*d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = null
argument11[1.1277822633002616e+308] = false
return a/b*c/d
};
var argument11 = false;
var argument12 = "";
var base_0 = [122,126,893,607,59,213,893,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,126,893,607,59,213,893,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,126,893,607,59,213,893,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,126,893,607,59,213,893,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test973.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)