





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9] = {"969":1.0937996148104563e+308,"1.3186787711859412e+308":705}
argument3[1] = 403
argument2[2.249941463060761e+307] = true
return a+b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = [403,126,714]
argument4[5] = ["Y$","f2",-1]
base_1[2] = 1.7071956207417385e+308
return a+b-c
};
var argument4 = false;
var argument5 = {};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = ["j","t:","L","b","2R","f","H","+"]
return a*b-c
};
var argument7 = "%";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = 783
base_3[3] = true
return a*b+c
};
var argument9 = r_1;
var base_0 = [82," ",595,-100,"Z",":","&;Qn",705]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82," ",595,-100,"Z",":","&;Qn",705]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82," ",595,-100,"Z",":","&;Qn",705]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82," ",595,-100,"Z",":","&;Qn",705]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test178.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)