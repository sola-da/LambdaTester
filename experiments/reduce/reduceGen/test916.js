





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = null
return a*b+c+d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[627] = ""
return a*b/c*d
};
var argument4 = 82;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = null
return a/b/c-d
};
var argument6 = [403,823,627,969,82,126];
var argument7 = null;
var argument8 = [25,969,893,213];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = 1.1640283600143476e+308
return a/b/c*d
};
var base_0 = ["]n#","!","V)","P","Dw","x"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]n#","!","V)","P","Dw","x"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]n#","!","V)","P","Dw","x"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]n#","!","V)","P","Dw","x"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test916.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)