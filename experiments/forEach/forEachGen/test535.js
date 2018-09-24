





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['wIs'] = [25,-100,"5",82,"K",823,"H=[cN",242,0,"3S"]
return a-b*c
};
var argument2 = 1.624382634888294e+308;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = null
argument5[5] = null
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"":"",",1|":5e-324,"gl":"","IeEd":705,"y4":"&)@g","5.840751455960785e+307":""}
argument6 = {"607":"","969":1.7976931348623157e+308,"[SGE":843,"1.1451874616155341e+307":607,"Dh":"{I","":"F"}
base_2[3] = ""
return a-b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = 1.7976931348623157e+308
base_3['length'] = {"122":"","714":9.261990736725053e+307,"XP":1.3804641591949939e+308,"1.4481550596109624e+308":8.951668485698765e+307,"-100":"2","":"nQ","u":6.168965759983793e+307,"8.563029468192291e+307":""}
return a/b*c
};
var argument7 = null;
var argument8 = r_2;
var base_0 = [82,627,843,460,893,893,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,627,843,460,893,893,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,627,843,460,893,893,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,627,843,460,893,893,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test535.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)