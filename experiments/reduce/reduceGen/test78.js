





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = true
base_0[3] = [-1,823,0,595,0,242,460,969]
return a*b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = 969
base_1[1][0] = {"843":893,"893":"cv","1.4029642643224025e+307":242,"1.55124998452567e+308":""}
return a+b+c-d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = null
return a-b+c-d
};
var argument4 = "!";
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = true
return a+b-c-d
};
var base_0 = [-1,122,100,82,460,714,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,122,100,82,460,714,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,122,100,82,460,714,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,122,100,82,460,714,655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument4,argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test78.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)