





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = false
return a*b+c
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = null
base_1[6] = {"213":"","705":595,"ib":7.916724262428322e+306,"":607,"1.7087218930893333e+308":"","^G":969}
return a*b-c
};
var argument5 = "";
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = {"25":"y,g8","595":1.4901185244855606e+308,"1.7261030733891165e+308":213,"&B":25,"3b":"","1.2685096701799995e+307":"","6.247914655578504e+307":""}
argument9 = false
return a/b-c
};
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = 100
base_3[1][6] = 893
return a+b-c
};
var base_0 = [-100,122,460,893,213,-1]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,122,460,893,213,-1]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,122,460,893,213,-1]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,122,460,893,213,-1]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test609.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)