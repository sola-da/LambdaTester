





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"100":"mI","1.7311605209653885e+308":1.1975995924249525e+308,"":"","J":893,"D":""}
argument2[3.3156198695370476e+307] = null
return a-b*c
};
var argument2 = "";
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = null
return a/b/c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = ""
return a*b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = 157
base_3[0][2] = 655
return a*b*c
};
var argument9 = [">G","@&7f","W","f","HL(NC"];
var argument10 = {"403":126,"969":1.4921939711243124e+308,"3.369824754180571e+307":3.715405932880862e+307,"7H":"","3.75810121441177e+307":1.2444500270267497e+308,"1.7128942599042654e+308":"[T'","R":1.5466078922572574e+308,"":"''7","1.1963296259367247e+307":"k4"};
var base_0 = [403,0,242,242,213,714,-1]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,0,242,242,213,714,-1]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,0,242,242,213,714,-1]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,0,242,242,213,714,-1]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test125.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)