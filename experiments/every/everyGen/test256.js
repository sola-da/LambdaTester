





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = [0,705,893,618,403]
return a*b+c
};
var argument2 = true;
var argument3 = {"122":403,"":"B","9.002548138894187e+307":7.60229268401253e+307,"1.4039820686913427e+308":"","4.850459238327186e+307":8.809993139242034e+307,"H5(Ob":-1,"$":6.209875132005905e+307};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][4] = ""
argument5[0] = ""
return a-b-c
};
var argument5 = false;
var argument6 = 1.7189067126624441e+308;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.3599216339661573e+308] = [126,823,59,705,823,-1,460,714,893]
argument7[2] = null
return a/b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = "6"
argument9[3.3156198695370476e+307] = true
argument9[6] = {"705":"s"}
return a+b/c
};
var base_0 = [655,157,213,100,126,893,627,-100,403,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,157,213,100,126,893,627,-100,403,893]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,157,213,100,126,893,627,-100,403,893]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,157,213,100,126,893,627,-100,403,893]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test256.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)