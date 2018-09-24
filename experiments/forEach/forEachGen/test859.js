





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9] = {"7.027233324450658e+307":"US&6","":"","1.5239637461110805e+308":"v","1.2576534689712073e+307":"*"}
argument2[8.748669805137695e+307] = ["b",-1,82,82,"K"]
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = ["(","*W",213]
base_1[3][1.3434821406183095e+308] = 1.690682444519448e+308
argument3['wIs'] = null
return a-b*c
};
var argument3 = {"100":893,"618":1.3019676993571718e+308,"1.7627661621255174e+308":25,"1.6722127532894108e+307":-1,"":157};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.0446313380579697e+308] = 2.916518021528663e+306
return a+b/c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.92397107964922e+307] = [157,1.7976931348623157e+308,"w",100,82,"zE","+"]
argument9[4] = false
return a/b+c
};
var base_0 = ["U",0,"N",25,126,"^w38*"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U",0,"N",25,126,"^w38*"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U",0,"N",25,126,"^w38*"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U",0,"N",25,126,"^w38*"]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test859.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)