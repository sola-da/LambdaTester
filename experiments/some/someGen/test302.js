





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = ""
return a/b/c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['T'] = null
return a+b*c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[618] = {"0":"","49":"%;c","1.7976931348623157e+308":"`Un"}
return a*b/c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = false
argument9[1] = "{"
return a+b+c
};
var argument8 = false;
var base_0 = [25,242,655,595,618,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,242,655,595,618,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,242,655,595,618,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,242,655,595,618,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test302.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)