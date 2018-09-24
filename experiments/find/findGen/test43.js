





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = {"122":"","157":"","595":460,"7.563911213220181e+307":"x:","er":595,"XEo(":")","7.024657216925971e+307":"P!","":""}
argument2[5] = 6.439374115453593e+307
return a-b-c
};
var argument2 = "";
var argument3 = 8.140090712545894e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = 3.674039936028198e+307
base_1[3] = 242
base_1[4] = 59
return a+b*c
};
var argument5 = r_0;
var argument6 = {"25":-1,"893":607,"":"","1.203936807675754e+308":403,"4.541040552891128e+307":"","7.428990757376543e+307":2.522470287095311e+307,"1.7122782250156553e+308":783};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[893] = [595,"{5*","V",627,49,"Hia","9","5"]
return a+b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = false
return a+b/c
};
var base_0 = [0,655,"n1",969,655,403,"Y"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,655,"n1",969,655,403,"Y"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,655,"n1",969,655,403,"Y"]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,655,"n1",969,655,403,"Y"]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test43.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)