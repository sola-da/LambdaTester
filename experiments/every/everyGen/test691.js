





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][6] = ""
argument2[8] = ["U","h","F","&av","UFu","`jFx","D","c","#h","aY"]
argument2[6] = 1.9124722009749185e+307
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['io'] = true
argument4[6] = [705,100,969,1.7976931348623157e+308,157,783,655,25,82,595]
base_1[9] = ""
return a/b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = 0
argument4['sJRZP'] = 6.753510914592809e+307
return a-b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = {"969":"%"}
argument5[403] = false
argument5[2] = false
return a*b-c
};
var base_0 = ["+","Iw","F","kO","d","vN","d","+DX5","a","e"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+","Iw","F","kO","d","vN","d","+DX5","a","e"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+","Iw","F","kO","d","vN","d","+DX5","a","e"]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+","Iw","F","kO","d","vN","d","+DX5","a","e"]
var r_3= undefined
try {
r_3 = base_3.every(argument4)
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
require("fs").writeFileSync("./experiments/every/everyGen/test691.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)