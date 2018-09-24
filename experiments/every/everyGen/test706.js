





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['sJRZP'] = 242
base_0[1][6] = null
return a+b-c
};
var argument2 = {"0":"+w","":1.2133273120401463e+308,"2.809770966311633e+307":"","5e-324":"","1.7976931348623157e+308":969,"5.554737320035566e+307":"","9.36023792787431e+307":-100};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = ["v","-b-",714]
base_1[0][6] = {"126":"8","ux":783,"1.1950208667199944e+308":"","":1.3157686163008465e+308,"e":403}
argument5[6] = [655,618,126,460,157,49,0,705]
return a/b+c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = [0,607,"00G",25,82,49,"m",627,714,"@h"]
argument5[2] = 8.525572866992085e+307
return a-b-c
};
var argument6 = [893,"u",25,157,-100,655,"#E",122,"j*"];
var argument7 = 823;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['io'] = true
return a-b*c
};
var base_0 = [242,126,618]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,126,618]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,126,618]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,126,618]
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
require("fs").writeFileSync("./experiments/every/everyGen/test706.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)