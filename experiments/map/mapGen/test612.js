





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[893] = "XibuN"
argument2[9.869573703797622e+307] = false
return a*b*c
};
var argument2 = true;
var argument3 = {"":1.3659223629919801e+308,"V":0,"7.197825492763707e+306":"","8.309713031137395e+307":618,"6.890933998008004e+307":655,"s":-100,"1.0364019022080451e+308":-1,"2.952107499761781e+307":1.503615553589697e+308,"1.2134970186409625e+308":122};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = ""
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1] = 7.904499263028698e+307
argument7[403] = true
return a-b-c
};
var argument6 = r_0;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][2][6] = ["t$b","?"]
argument10['T'] = ""
base_3[9] = "87"
return a+b/c
};
var argument9 = true;
var base_0 = ["`","&{vp"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`","&{vp"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`","&{vp"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`","&{vp"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test612.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)