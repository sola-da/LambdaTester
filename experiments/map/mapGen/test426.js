





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"242":655,"893":">Xf|AYQ;ZU","":"[=;","t":"C|","1.3541577858684786e+308":"","5e-324":-100,"l<j":"v","5.615573729974503e+307":3.949789806882995e+307,"1.4458147143432193e+308":""}
argument2[1.1881593224845412e+308] = null
base_0[0][0] = 8.964998668509606e+307
return a-b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][4] = {"122":"*,MH!","1.4472072699667302e+308":"W|j",":":"__","":627,"7.352591069839666e+307":""}
argument3[618] = [122,"4({",">",49,893,1.7976931348623157e+308,"P%U","I",403,-1]
base_1[7][2] = 1.0679123547020678e+308
return a-b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = null
argument4[1] = [213,59,705,893,"wA,",618,25,"u","&|2"]
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = null
base_3[3][1] = true
argument6[403] = false
return a-b/c
};
var argument5 = {"0":1.8900169501848738e+307,"157":8.464514469473943e+307,"823":"","893":1.6555152742988208e+308,"1.7474986119242819e+308":"X","":"","9.230245528329412e+307":""};
var argument6 = false;
var base_0 = [157,126,126,705,460,"ll]"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,126,126,705,460,"ll]"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,126,126,705,460,"ll]"]
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,126,126,705,460,"ll]"]
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test426.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)