





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = "g"
argument1 = 9.01851393262476e+307
argument2[8.748669805137695e+307] = ["t",655,"J$","6","r","f2"]
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = 783
base_1[8] = [-1,618,122,893]
argument3[2] = 0
return a*b+c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = true
base_2[9] = false
return a*b+c
};
var argument6 = {"242":1.4776172671192576e+308,"714":"","823":7.392991634291948e+307,"3.868257684955221e+307":1.0355528289714827e+308,"":1.1645998170280794e+308,"b>":"p","3.0481490052276395e+306":100,"1.6454226339697587e+308":"u"};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = 157
argument8[3.0481490052276395e+306] = 1.6626061928702693e+308
argument8[2] = 1.0683640918439695e+308
return a+b-c
};
var base_0 = [82,157,100,25,157,157,783,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,157,100,25,157,157,783,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,157,100,25,157,157,783,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,157,100,25,157,157,783,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test50.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)