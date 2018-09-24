





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][6] = null
argument2[1.9097830510613482e+307] = [823,82,595,25,595,607,783,122,0]
base_0[6] = {"59":25,"126":")]","893":7.875410433945878e+307,"C":":","r":893,">i7eZ7`":6.08500454853895e+307,"1.2604739228781071e+308":",Fp","":"","3.707614409366676e+307":";_"}
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = null
argument3[3.3156198695370476e+307] = {"969":1.0455499097884365e+305,"o":"o","":""}
base_1[2][7] = 5.717319866201113e+307
return a/b-c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][7] = null
argument7[122] = ["X","0","MF","HX"]
return a*b-c
};
var argument6 = null;
var argument7 = {"59":714,"242":"","1.4631120457231762e+308":"'H","":627};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = false
return a*b/c
};
var argument9 = r_1;
var base_0 = [49,607,0,783,157,59,823,213,403,49]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,607,0,783,157,59,823,213,403,49]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,607,0,783,157,59,823,213,403,49]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,607,0,783,157,59,823,213,403,49]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test600.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)