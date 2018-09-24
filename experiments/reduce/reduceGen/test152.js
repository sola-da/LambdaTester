





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = [595,"["]
return a/b*c/d
};
var argument2 = null;
var argument3 = {"783":1.275824592168443e+308,"969":893,"":607,"B":100};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = ""
return a/b-c+d
};
var argument5 = {"403":"","783":1.059191606247794e+308,"":"{xE'UH2eIi","rrz":"A{","1.1698548965822881e+308":"G"};
var argument6 = null;
var argument7 = null;
var argument8 = "";
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = 1.7654742968591194e+308
return a-b/c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][4] = 1.5199479692466057e+308
base_3[1] = ""
argument11[3] = [460,242,595,100]
return a-b/c/d
};
var base_0 = [893,1.7976931348623157e+308,49,82,5e-324,618,705,655,1.7976931348623157e+308,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,1.7976931348623157e+308,49,82,5e-324,618,705,655,1.7976931348623157e+308,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,1.7976931348623157e+308,49,82,5e-324,618,705,655,1.7976931348623157e+308,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,1.7976931348623157e+308,49,82,5e-324,618,705,655,1.7976931348623157e+308,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test152.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)