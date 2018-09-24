





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = "!"
argument2[5] = ["U","L","VRN","5","FCJ!l","U","%g","o"]
argument1 = 627
return a-b+c
};
var argument2 = [403,"2z",157,"a","["];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[714] = "^q0"
base_1 = [655,49,100,618,403,714,460,213,460]
return a-b-c
};
var argument5 = [126,655,595,100,627,893,-100,607,618];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][618] = {"82":"","2.2357608950492605e+307":"KThC","Q":705,"tXt":"=","1.55598075653468e+308":460}
base_2[2]['f'] = {"618":-100,"":"","8.586848328959931e+307":59,"5.769513911933439e+306":5.439379093465963e+307,"|iZ":6.106974798246119e+307,"1.5222471423085663e+308":100,"_f4":"V","7.313525549936068e+307":49}
base_2[3][2][5] = {"242":1.567915477595017e+308}
return a+b/c
};
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = [893,714,242,-1]
argument9[6] = ""
base_3[0][0] = true
return a+b+c
};
var base_0 = [714,25,705,618,49,705,893,82,49,82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,25,705,618,49,705,893,82,49,82]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,25,705,618,49,705,893,82,49,82]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,25,705,618,49,705,893,82,49,82]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test980.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)