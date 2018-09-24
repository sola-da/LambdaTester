





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.4034744228995816e+308] = false
return a*b+c
};
var argument2 = [5e-324,655,122,403,213,-1,122,655];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = null
base_1[2] = {"2.899026469480456e+307":"-r,-","2.4504837340413813e+307":"","Ol@":2.76589595675279e+307,"8.219755775179059e+307":"","-a":"0S*n","1.6867966269191668e+308":"L"}
return a-b*c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['wIs'] = true
return a-b-c
};
var argument6 = r_0;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['C'] = 1.3033301241988422e+308
base_3[3][0] = {"969":1.4236922070047604e+308,"":59,"2.1293722290408512e+307":"D:","hj":655,"AOzM":"F","{":"H","rK":"zRIei"}
argument9[4.224481734419934e+307] = true
return a-b+c
};
var argument9 = r_3;
var base_0 = ["`","FZ","ii","^-","fT","&",",","4 "]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`","FZ","ii","^-","fT","&",",","4 "]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`","FZ","ii","^-","fT","&",",","4 "]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test371.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)