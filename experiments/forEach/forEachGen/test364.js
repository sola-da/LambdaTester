





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = [969,595,783,655,714,100]
argument1 = {"3.2352712311949065e+307":1.381342947035192e+307}
argument2['wIs'] = [607,607,627,122,59,595]
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['wIs'] = {"122":2.947897890882363e+307,"126":"d)","242":"","893":213,"":5.524089871368597e+307,"2.908606200033987e+307":"",",fK":"","9.7915966619577e+307":"F","4.559827007288413e+307":-1}
return a+b+c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = 714
return a/b*c
};
var argument5 = {"460":"","XQ":1.5987095084200545e+308,"":"","1.565611376331922e+308":9.92791065221533e+307};
var argument6 = ["K","^","+"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.4034744228995816e+308] = 823
argument8[126] = ""
return a*b+c
};
var argument8 = null;
var base_0 = [893,122,157,-1,82,655,969,126,25,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,122,157,-1,82,655,969,126,25,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,122,157,-1,82,655,969,126,25,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,122,157,-1,82,655,969,126,25,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test364.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)