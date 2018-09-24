





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = "gs"
base_0[4] = 1.607316626047333e+307
base_0 = [5e-324,82,0,823,25,705]
return a+b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"607":"{:","5.211260305753224e+306":100,"9.338856494798126e+307":1.1051346736375826e+308,"&O":"","O":""}
base_1[1] = 242
argument2 = 1.7976931348623157e+308
return a+b+c+d
};
var argument3 = true;
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = 705
base_2[8] = false
base_2['length'] = {"460":6.919932464016283e+307,"783":"","x":"","":"V","XZ":"","1.688877847563681e+308":9.474061555027644e+307,"1.237589637788156e+308":""}
return a+b*c/d
};
var argument6 = null;
var argument7 = null;
var argument8 = "";
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = 1.3609930124295652e+308
return a/b-c-d
};
var base_0 = [655,"v",49,"0}iPr"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,"v",49,"0}iPr"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,"v",49,"0}iPr"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,"v",49,"0}iPr"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test18.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)