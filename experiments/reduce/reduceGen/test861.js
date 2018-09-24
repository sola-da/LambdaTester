





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = [59,"r?*",126,"@","P",59,242,"l@",783,714]
argument3[627] = [157,705,-1,122,893,893,25,595,705]
argument2[4] = ""
return a*b*c/d
};
var argument2 = null;
var argument3 = null;
var argument4 = [-100,607,0,460];
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[59] = 403
return a-b-c*d
};
var argument8 = "";
var argument9 = null;
var argument10 = {"0":460,"126":595,"618":"H","?=k":">","LoB{5":893,"60*":100,"":705,"bN":2.2049047046121107e+307,"'":"J","kk{":1.7976931348623157e+308};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = null
return a/b-c-d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"":"q","-1":714}
argument14[3] = false
base_3[3][1] = ""
return a/b*c-d
};
var argument13 = {"1.7112838182700878e+308":607,"2.1809100433670638e+307":595};
var base_0 = ["1","J",";","L","#","f3","yk","[",":","ypYzjp"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1","J",";","L","#","f3","yk","[",":","ypYzjp"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1","J",";","L","#","f3","yk","[",":","ypYzjp"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1","J",";","L","#","f3","yk","[",":","ypYzjp"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test861.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)