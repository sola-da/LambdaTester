





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = null
argument1 = false
base_0['length'] = [714,714]
return a+b-c*d
};
var argument2 = null;
var argument3 = false;
var argument4 = ["_d","6P","-e","Z","I",","];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = ["Y@","?Z","y","J}",")M","e"]
base_1[7] = ""
argument2 = {"242":82,"783":"","1.034802763432993e+308":595,"":"","JtvB":"d_","A":"|","2.8760483990397303e+307":4.1368478121182843e+307,"5.371310521370938e+307":823}
return a-b*c/d
};
var argument6 = false;
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = [100,82,25,843,783]
base_2[8] = false
return a/b-c+d
};
var argument10 = ["D*","#{",403,893,"=",893,242];
var argument11 = "";
var argument12 = "";
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = [49]
argument12 = true
base_3[3] = 460
return a/b-c/d
};
var base_0 = ["pL","2","%","qg","My"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["pL","2","%","qg","My"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["pL","2","%","qg","My"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["pL","2","%","qg","My"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test67.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)