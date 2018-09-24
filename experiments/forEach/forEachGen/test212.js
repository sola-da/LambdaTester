





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = "S"
base_0[7] = null
return a*b-c
};
var argument2 = 403;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = ["f","=1","2n","@(_ije","*#","9be","C%8"]
base_1[9] = ""
argument6[5] = [843,242,0,823,25,242]
return a-b/c
};
var argument5 = 8.429536561038751e+307;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = [893,49,-1,126,460,100,59]
argument7[126] = "gn"
argument7 = ["k",49,893,25,"I","T",595]
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = "x"
base_3[7] = {"":1.8120180085002136e+307,"1.4506877547765539e+308":"Q{","7.361484079423645e+307":403,"2.208461208739234e+307":""}
argument9[1] = null
return a-b*c
};
var argument8 = [705,-1,783,893,460];
var base_0 = [714,714,843,122,460,714,893,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,714,843,122,460,714,893,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,714,843,122,460,714,893,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,714,843,122,460,714,893,893]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test212.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)