





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = 8.15959623115481e+307
return a/b+c*d
};
var argument2 = false;
var argument3 = true;
var argument4 = 705;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = {"25":"","213":"#","gMs":1.7054403980824489e+308,"1.2866479498005385e+308":705,"P":242,"":"","5.307235894001905e+307":""}
base_1[1][3] = {"607":7.197865767111184e+307,"":"","1.529623292814841e+308":6.016848451460084e+307}
base_1[0][3] = "cx"
return a/b-c-d
};
var argument6 = false;
var argument7 = null;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = true
base_2[3] = false
argument7[7] = true
return a/b/c-d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = {"126":"","213":"`q","893":1.6709044332704333e+308,"m;@to":"+:","":"","c":"","Q":100,"';rL":"","#ap}":5.044021660763956e+307,"o7":1.6432923968081557e+308}
base_3[1][0] = ""
base_3[8] = {"714":"","1.0795099474914318e+308":"K_N","4.86273452254867e+307":-100,"":2.807890356169022e+307,"8.890689500689119e+307":1.1290319456342857e+308,"2.808850358062499e+307":"","1.446934342735146e+308":893,"8.857361638082051e+307":""}
return a*b+c/d
};
var base_0 = [893,126,100,403,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,126,100,403,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,126,100,403,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,126,100,403,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test145.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)