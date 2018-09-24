





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = {"":969,"#":-1,"1.477458338265528e+308":"%"}
return a+b/c
};
var argument2 = [627,242,157,213,82,823,82,823,893,714];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = null
return a+b-c
};
var argument5 = null;
var argument6 = ["W",403,627,59,705];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.1881593224845412e+308] = {"82":"","92":1.170040614876174e+308,"":"","`C":"","4.88845335993414e+307":2.5885986945046204e+307,"<(":"eCfnDLJiE","lR":1.22157349492427e+308,"1.559078220923285e+308":"",">l":-100}
base_2[0][0] = 1.7733320784999906e+308
return a+b-c
};
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[5] = {"59":1.080087650979422e+308,"-100":969}
return a/b-c
};
var base_0 = [122,213,460,893,893,595,627,783,893,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,213,460,893,893,595,627,783,893,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,213,460,893,893,595,627,783,893,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,213,460,893,893,595,627,783,893,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test405.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)