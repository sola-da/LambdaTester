





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = {"0":1.9251528254274836e+307,"82":460,"122":1.1933221992775175e+308,"627":893,"843":1.2543099659773127e+308,"969":"[5>","t$":"ctx%6","6.551372262291228e+307":59,"9i":""}
argument2 = true
return a*b+c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4.224481734419934e+307] = 242
argument6 = 627
argument5['_W'] = null
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[157] = ["ra","n&","6Poh","Jb","C","Z","t","cg"]
base_2[4][7] = [">r","([","v","{a%","U","WO"]
return a*b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['Y'] = null
base_3[4][7] = null
argument8[122] = ""
return a/b-c
};
var argument7 = false;
var argument8 = {"49":893,"157":6.337602264881729e+307,"783":"x&y","":"",",":823,"4.552625696055163e+307":126};
var base_0 = [823,-1,460,82,49]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,-1,460,82,49]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,-1,460,82,49]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,-1,460,82,49]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test455.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)