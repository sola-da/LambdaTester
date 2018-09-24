





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = "F"
return a/b/c
};
var argument2 = r_0;
var argument3 = 714;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[122] = null
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = 823
return a*b/c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = ["6","?","DBR|6","=eEq0","t","^fM{","Y","cuuQ|","om7","dQ"]
return a+b/c
};
var argument8 = {"CC":0,"6.434431874589216e+307":3.7134454897479576e+307,"":49,"5.243365456804691e+307":"-xC","1.8985717479067235e+307":1.0728367402163146e+308,"1.374492974838101e+308":"","V":"s","-100":82,"1.613094046278566e+308":"Y-?"};
var base_0 = [714,969,5e-324,-100,843,655,100]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,969,5e-324,-100,843,655,100]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,969,5e-324,-100,843,655,100]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,969,5e-324,-100,843,655,100]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test579.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)