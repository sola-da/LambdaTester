





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
base_0[1][2] = [100,"Q","M",823,-1,"Y@"]
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = null
base_1[6] = {"403":1.5377456617408041e+308,"783":"","-{}!'":"","1.0693381485327306e+308":8.219983422705878e+307,"o":"","JtvB":"d_","A":"|","2.8760483990397303e+307":4.1368478121182843e+307,"5.371310521370938e+307":823}
return a+b/c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = [705]
argument6 = 403
base_2[3][0] = {"6":714,"N":"","1.5687163216180287e+308":6.397415415551515e+307,"1.1833453110569226e+308":1.3491235848125192e+308}
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"403":"","460":1.4548604842375142e+308,"595":"","+p=":"Iae","":403,"0C-":"S$","1.3426854933107927e+308":122,"Gc":627,"5.526547854399515e+307":"6","4.392583087188832e+307":"D"}
return a*b-c
};
var base_0 = ["P"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P"]
var r_3= undefined
try {
r_3 = base_3.filter(argument5)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test76.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)