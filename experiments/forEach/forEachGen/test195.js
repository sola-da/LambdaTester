





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = 1.1697661047198294e+308
argument2[0] = {"618":6.265309145796475e+307,"1.2411167154005379e+307":"","1.142136880189398e+308":1.8658061753952827e+307,"":403,"oM`":5.727395412153241e+307,"9.031306469414775e+307":"","1.8070569095600382e+307":"","J":"nK"}
base_0[3][1.3434821406183095e+308] = null
return a/b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"7.552867960642783e+307":213}
base_1[0][1] = false
argument5[4] = {"":9.66776877226183e+307,"4.491954857332345e+307":"<n","LVT":""}
return a-b/c
};
var argument4 = "";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = false
return a/b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][823] = 2.7323586857295004e+306
base_3[1] = false
argument6['1SHF1'] = null
return a-b+c
};
var base_0 = [-100,242,823,242,843,157,-1,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,242,823,242,843,157,-1,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,242,823,242,843,157,-1,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,242,823,242,843,157,-1,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test195.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)