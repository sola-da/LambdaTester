





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = null
base_0[3] = true
argument3[9.551053197482062e+307] = ["p",122,705,618,"t(",783]
return a*b-c
};
var argument2 = 157;
var argument3 = [969,122,783];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.5109538778533692e+308] = [157,823]
argument5['5L'] = 2.264445208146585e+306
return a*b+c
};
var argument5 = 1.7976931348623157e+308;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = "0Pt?u"
argument8['f9zgt4n!ZJR]W'] = {"3":1.2125220863858367e+308,"403":"9jv","E":893,"1.4450192944001616e+308":"&th?","[":9.32581590410869e+307,"9.008320725445931e+307":"v"}
base_2[2][5] = null
return a*b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = true
argument10[403] = ["]","l$P","u0","M!"]
return a-b/c
};
var base_0 = [655,25,403,705,-1,25,59]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,25,403,705,-1,25,59]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,25,403,705,-1,25,59]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,25,403,705,-1,25,59]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test682.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)