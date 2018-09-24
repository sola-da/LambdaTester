





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = 1.0877116069311555e+308
argument1 = false
return a/b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = false
base_1[8] = -100
argument4[6] = {"25":3.567637315423533e+307,"49":1.6019169037820345e+308,"893":4.885337019839871e+307,"969":"hy^","":"W","Ar":823,"1.4628787348757736e+308":2.4704675934438263e+307,"2.752184137538193e+307":""}
return a+b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"0":-1,"655":242,"893":595,"7.244376982942379e+307":"wjo","w":714,"MK":1.7976931348623157e+308,"8.651043508999703e+307":1.2022100583470313e+308,"E":"wh"}
base_2[9] = ["Z","+","_BulD"]
argument5[4] = 1.1582656942887453e+308
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = true
base_3[0][1] = [823,82,"?","%MxT",627,"JWt"]
base_3[2] = 1.3288974220328145e+308
return a*b+c
};
var argument6 = true;
var argument7 = r_2;
var base_0 = ["C",969,969,"W"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C",969,969,"W"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C",969,969,"W"]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C",969,969,"W"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test238.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)