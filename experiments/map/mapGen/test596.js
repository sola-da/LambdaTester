





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][5] = {"0":1.193629873730533e+308,"1.426908717219554e+308":"",",x_":"N>"}
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = false
return a+b-c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = null
base_2[0] = null
argument5[618] = [618,25,655,618,627,242]
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['A'] = "l"
base_3[2][5] = 1.324119693333797e+308
return a+b-c
};
var argument6 = true;
var argument7 = ["Ay","[Y","27G4","Q>","VZ","s","o2]","*4","]u"];
var base_0 = [823,"^","F"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"^","F"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"^","F"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test596.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)