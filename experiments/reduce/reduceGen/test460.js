





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = 1.554681115799677e+308
return a*b+c-d
};
var argument2 = [893,893,213,122,126,655,607,714,100];
var argument3 = null;
var argument4 = false;
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = false
argument4[403] = ["ZH","8xZ[B","xup1"]
argument4[1.1277822633002616e+308] = 1.781175987289957e+308
return a-b-c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][0] = "k"
base_2[2][0] = [1.7976931348623157e+308,157,460,122,893,705,59]
return a/b-c/d
};
var argument8 = false;
var argument9 = false;
var argument10 = {"823":-1,"":"+","3.070696526768704e+307":"","-1":"f","{":-100,"-":"<;","As*":655,"B":9.046581384249556e+307,"9.294296120015325e+307":242};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
argument9[213] = 607
return a*b+c+d
};
var base_0 = ["48",">","V","-?yJ4","Nco","2"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["48",">","V","-?yJ4","Nco","2"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["48",">","V","-?yJ4","Nco","2"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["48",">","V","-?yJ4","Nco","2"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test460.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)