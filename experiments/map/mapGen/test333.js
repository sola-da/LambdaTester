





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[157] = 705
argument2[893] = false
return a-b*c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = [823,595,783,714,705]
base_1[7] = null
argument5[82] = false
return a+b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = ""
base_2[0] = false
argument7['C'] = ""
return a-b*c
};
var argument7 = [618,627];
var argument8 = r_1;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[893] = 3.4803798304224114e+307
argument10[5] = {"6":8.00068852058892e+307,"460":"","-%":"","-v":""}
argument10[403] = "'"
return a/b*c
};
var argument10 = null;
var argument11 = null;
var base_0 = ["i*",122,"F","m","s",969,25,"-",49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i*",122,"F","m","s",969,25,"-",49]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i*",122,"F","m","s",969,25,"-",49]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i*",122,"F","m","s",969,25,"-",49]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test333.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)