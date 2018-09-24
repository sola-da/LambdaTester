





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.748669805137695e+307] = 122
argument2[3.0481490052276395e+306] = {"242":9.937371213103693e+307,"e":""}
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = ["Y@","?Z","y","J}",")M","e"]
base_1[0][823] = ""
argument3[2] = {"242":82,"783":"","1.034802763432993e+308":595,"":"","JtvB":"d_","A":"|","2.8760483990397303e+307":4.1368478121182843e+307,"5.371310521370938e+307":823}
return a*b/c
};
var argument3 = {"213":"","403":"p=","":"","Jm":"Ob[<|","6.397415415551515e+307":1.1833453110569226e+308,"1.3491235848125192e+308":"#X","-100":"","Iae":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = true
base_2[3] = true
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = "RW"
base_3[5] = [242,126,59,893]
return a-b+c
};
var argument6 = "";
var base_0 = [100,460,49,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,460,49,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,460,49,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,460,49,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test77.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)