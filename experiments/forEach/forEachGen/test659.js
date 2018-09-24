





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.4034744228995816e+308] = [893,25,25,242,122,213]
base_0[2][8.05235215815219e+307] = null
base_0 = {"82":"","126":"",":2":82,"og]D":705,"":-100,"x":"ta","2.79021680837961e+307":"$","r":1.966163970540522e+305,"t":"",">&6t":403}
return a/b*c
};
var argument2 = ["{","A654W","Z","g?1",0,"vR","SQU",126];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4.224481734419934e+307] = [969,403,126,783]
return a/b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = ""
argument7 = "krjYhSl"
return a/b*c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.9097830510613482e+307] = null
base_3[0][823] = true
argument9[3.462967293930506e+307] = 242
return a-b/c
};
var argument8 = {"0":-100,"126":627,"893":"","":"-M","S":"iP","&":1.3399318887253108e+308,"8.551392953018539e+307":100,"1.7976931348623157e+308":"","-1":""};
var argument9 = 3.5161212236526285e+307;
var base_0 = [969,843,213,655,893,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,843,213,655,893,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,843,213,655,893,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,843,213,655,893,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test659.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)