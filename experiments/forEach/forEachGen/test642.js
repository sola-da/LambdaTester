





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['-'] = 49
argument2[1.3130321063336282e+308] = [25,403,157]
argument2[8] = ["M","Pv",213,"CA%","^","-"]
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = {"25":"5","403":"","893":-1,"6.523786381253935e+307":"","":242,"1.5954208663252643e+308":-1,"8.693701969873401e+307":"j3"}
base_1[3][1.3434821406183095e+308] = true
return a-b-c
};
var argument3 = {};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.4570946481947045e+308] = 893
argument5[0] = ["7y",">}iC","c@","t","@","z49e","Q",";"]
argument5[1.3130321063336282e+308] = 59
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['wIs'] = ["c","5","b`","&=39b","=","O","J"]
base_3[0] = 2.963662640982969e+307
return a/b+c
};
var base_0 = [126,1.7976931348623157e+308,"{","?le*-Uy6","a"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,1.7976931348623157e+308,"{","?le*-Uy6","a"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,1.7976931348623157e+308,"{","?le*-Uy6","a"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,1.7976931348623157e+308,"{","?le*-Uy6","a"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test642.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)