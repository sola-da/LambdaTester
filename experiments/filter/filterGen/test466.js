





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = false
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"49":627,"82":1.3906066215479738e+307,"893":9.85750721466957e+307,"Tp":595,"5+":"%6","Z":3.2162980506863475e+307,"1.0753639012778249e+308":"","7.675284692587451e+307":"","1.0384762075155107e+307":""}
return a*b-c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = true
base_2[7] = {"157":1.2980470200434285e+308,"213":"","705":-100,"1.0676836774612332e+308":"","Ci":5e-324,"x ESQ,":"0lTd)MG!","":"'","S-":6.008151971349608e+307,"V":1.4019332809821765e+308,"}":""}
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = true
argument7[4] = ["h6","pCB",",","S"]
return a/b+c
};
var argument6 = true;
var base_0 = [-100,-100,213,705,460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,-100,213,705,460]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)