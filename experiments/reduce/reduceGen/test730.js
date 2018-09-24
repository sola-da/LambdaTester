





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = 607
return a+b/c*d
};
var argument2 = "%8";
var argument3 = 1.731075276257536e+308;
var argument4 = r_1;
var argument5 = true;
var argument6 = [213,1.7976931348623157e+308,705];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = false
argument6[5] = ""
argument5[627] = {"607":122,"":""}
return a*b*c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = {"1":"","618":969,"1.360912943502596e+308":2.65168311888286e+307,"[=":"R","":1.0682864623843772e+308}
return a+b*c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = true
return a/b*c-d
};
var base_0 = ["%",25,-100,122,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%",25,-100,122,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%",25,-100,122,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%",25,-100,122,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test730.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)