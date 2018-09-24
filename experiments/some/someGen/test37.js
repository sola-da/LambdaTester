





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = 607
base_0[5] = [126,607,0,893,893,655,82,705,59]
base_0[2] = null
return a+b-c
};
var argument2 = 714;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = [403,595,627,82,5e-324,595,893,783,460]
base_1[5] = ""
argument5 = {"49":9.326419465415975e+307,"655":1.7623334178658696e+308,"m":705,"":893,"5.126874849159552e+307":242}
return a/b+c
};
var argument4 = null;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = true
argument7[1.6798476101238045e+308] = "Nbo?U"
base_2['length'] = null
return a/b+c
};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = {"49":"","":1.2178659167626632e+308,"]":705,"1.1555586608677999e+308":"`","1.018100103851064e+308":595,"#O":"","-1":4.530408398325289e+307,"_":4.3435079692681306e+307,"u5X":595}
argument10[6] = {"705":157,"6.367825909238471e+307":8.500686108205199e+307,"":5e-324,"-":1.2588757789652546e+308}
return a/b+c
};
var base_0 = [0,655,157,627,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,655,157,627,893]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,655,157,627,893]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,655,157,627,893]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test37.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)