





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = [-1,"_",595,126]
argument3[1.4034744228995816e+308] = "Y"
base_0[4] = {}
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = ["mS","|","e","Z","-","%","!jWy"]
base_1[4][4] = [0,25]
base_1[0][1] = [655,100,843,1.7976931348623157e+308,59,460,627,49,627]
return a/b+c
};
var argument3 = null;
var argument4 = "w-G";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = true
argument6[0] = ""
argument6['U+WQ'] = "t7B"
return a*b+c
};
var argument6 = ["QS;Jz"];
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = ["V",-1,"A","Vy"]
argument10[3.462967293930506e+307] = 5.517023573525348e+307
return a-b/c
};
var base_0 = [403,-100,100,714,82,618,213,655,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,-100,100,714,82,618,213,655,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,-100,100,714,82,618,213,655,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,-100,100,714,82,618,213,655,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test458.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)