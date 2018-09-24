





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][0] = 1.4871315975577496e+308
argument2[2] = "gd"
base_0[1][0] = ""
return a-b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = [783,82,-100,403,-1,714,25,-100,0]
argument4[4] = 783
return a/b+c-d
};
var argument3 = ["s","k"];
var argument4 = true;
var argument5 = null;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627] = "v"
argument6[82] = true
return a+b+c*d
};
var argument9 = r_2;
var argument10 = {"82":126,"705":"tj!Ce_#O48","1.3955601716142564e+308":"","2yMIJ":1.2184015760594246e+308,"":1.5489527159070423e+308,"1.0121138003167645e+308":""};
var argument11 = "";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = false
base_3[5] = [823]
argument11[59] = false
return a*b-c/d
};
var base_0 = ["F*p:","W",-100,"A",969,"c<","[",655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F*p:","W",-100,"A",969,"c<","[",655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F*p:","W",-100,"A",969,"c<","[",655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F*p:","W",-100,"A",969,"c<","[",655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test428.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)