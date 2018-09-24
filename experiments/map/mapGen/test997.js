





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = null
argument2[2] = ["w","b","X",627,122,655,"Ls)","(x"]
return a/b/c
};
var argument2 = null;
var argument3 = {"595":"","893":1.4783197013956311e+308,"8.627121569582395e+307":242,"":7.334892422157402e+307,"9.587081576661149e+307":2.7261464821984925e+307,"BRK5":"i","?":")"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][5] = {"403":"#6","3.5695469864174975e+307":1.0526092766166058e+308,"2.1695718052933998e+307":"D%","":"","1.33954749866926e+308":"UI"}
argument6[157] = 5.182259862242608e+307
return a+b+c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][2][6] = [59,100,242]
base_2[3][618] = ["=",627]
argument8['d'] = true
return a/b/c
};
var argument8 = true;
var argument9 = r_0;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['AwD'] = {"0":705,"460":627,"705":"","^u%":843,"Bckj":843,"1.244661639716201e+308":"","1.4098469273198434e+308":"ii","1.0654615063252797e+308":969}
base_3[1][0] = "8"
return a*b*c
};
var argument11 = true;
var argument12 = true;
var base_0 = [25,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,627]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,627]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,627]
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapGen/test997.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)