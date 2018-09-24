





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = "N";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 3.976776530329704e+307
return a+b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = true
base_1[0][3] = null
base_1[0][3] = false
return a/b/c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = ""
base_2[6] = [403,714]
base_2[1][0] = null
return a*b-c/d
};
var argument7 = 7.239067790261796e+307;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = "l"
return a+b+c-d
};
var base_0 = ["Ma W","m[","t2Q?f","R>","7"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Ma W","m[","t2Q?f","R>","7"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Ma W","m[","t2Q?f","R>","7"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Ma W","m[","t2Q?f","R>","7"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test591.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)